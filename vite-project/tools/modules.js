
const fs = require('fs');
const path = require('path');

const request = require('request');
const cheerio = require("cheerio");

/**
 * @param {object} obj - targetList
 * @return {promises}
*/
const getHTMLData = (obj) =>{
  return new Promise((resolve, reject)=>{
    request.get({
      uri: obj.url,
      headers: {'Content-type': 'text/html;'},
    },(err, req, data) => {
      if(req.statusCode == 200){
        resolve(data)
        //HTMLParsedJSON(data,obj);
        fs.writeFileSync(path.resolve(__dirname,`./result/${obj.resultName}.html`), data);
      }
      resolve("");
    });
  })
}

/**
 * @param {string} htmlText - 取得したHTMLテキスト
 * @param {object} obj - targetList
 * @return {string}   targetList.xx
*/
const HTMLParsedJSON = (htmlText,obj) => {
  try{
    // options
    const $ = cheerio.load(htmlText);
    obj.result = Object.assign({});

    if(obj.getOptionFlag){//productOptionListを取得する場合
      const eleList = $('[id^="menu-"]');
      Array.from(eleList).forEach((list)=>{
        let id = $(list).attr("id");
        let name = id.replace("menu-","");
        //季節はサンドウィッチに後で統合させる
        if(name === "container"){
          id = "limited";
          name = id;
        };
        const objName = name;
        //if(!obj.result[objName])

        let resultArray = [];
        obj.result[objName] = Object.assign({});
        resultArray = [...$(`#${id} ${obj.getQuery}`),...$(`#${id} ul.productOptionList > li`)];



        //個別で変換 or remove
        switch (objName){
          case "sizeup":
          case "party"://データに加えない子たち
            obj.result[objName].status = "skip";
            return;
          case "free-topping"://ここだけ、実データを代入している
            obj.result[objName].status = "already";
            const {freeToppingList} = require("./data");
            resultArray = freeToppingList;
            // console.log(obj,resultArray);
          default :
            break;
        }

        if(resultArray.length){
          obj.result[objName].ary = Array.from(new Set(resultArray));
          obj.result[objName].id = id;
          obj.result[objName].name = objName;
        }
        // console.log((obj.result[objName].ary));
        // console.log(`result:${objName}`,obj.result[objName].ary.length,resultArray.length);
      })

    }else{
      obj.result[obj.resultName] = Object.assign({});
      obj.result[obj.resultName].ary = [].slice.call($(obj.getQuery));
      obj.result[obj.resultName].id = null;
      obj.result[obj.resultName].name = obj.resultName;
    }
    // console.log(`result${obj.url}:`,obj.result.length);
  }catch (e){
    console.error(e)
  }
  return obj;
}
//todo
/*
-各種で取得した、liのデータから、アウトプット用の情報を定義する
name string,
link string,
price(size : regular || long) Number,
糖質も一応 (size : regular || long) Number,
kcal (size : regular || long) Number,
*/
/**
 * @param {string} name - name
 * @param {string} link - link path
 * @param {Array}  size - Array<priceTemplate>
*/
const parentTemplate = {
  name : "",
  link : "",
  size : []
}
/**
 * @param {string} name - 主にサイズ名
 * @param {number} price - 価格
 * @param {number} carbohydrate - 糖質
 * @param {number} kcal - カロリー
*/
const priceTemplate = {
  name : "",
  price : 0,
  carbohydrate : 0,
  kcal : 0,
}
const setItemInfo = (element,resultAry) => {
  const temp = Object.assign({},parentTemplate);
  const $ = cheerio.load(element);
  temp.name = $(".product_name_ja").text();
  if(!temp.name.length){
    temp.name = $(".product_name h4").text();
  }
  temp.link = $("li > a").attr("href");
  temp.size = []

  const priceAreaAry = Array.from($(".price_area"));
  priceAreaAry.forEach(el => {
    const obj = Object.assign({},priceTemplate);
    const $$ = cheerio.load(el);
    const priceName = $$(".price_name").text();
    // if(!priceName || !priceName.length)return;

    obj.name = priceName;
    obj.price = Number($$(".price_yen").text().replace("￥","").replace("¥",""));
    obj.carbohydrate = Number($$(".price_carb").text().replace("g","").replace("糖質 ",""));
    obj.kcal = Number($$(".price_kcal").text().replace("kcal",""));

    temp.size.push(obj);
  })
  resultAry.push(temp);
}
const parseItem = (resultObj) => {
  if(resultObj.status === "skip" || !resultObj.ary.length){
    delete resultObj.ary;
    return;
  }

  resultObj.output = [];

  if(resultObj.status === "already") {
    resultObj.ary.forEach(item => {
      const temp = Object.assign({},parentTemplate);
      temp.name = item.name;
      resultObj.output.push(temp);
    });
    delete resultObj.ary;
    return;
  }

  for(var i = 0; i < resultObj.ary.length; i++){
    const el = resultObj.ary[i];
    setItemInfo(el,resultObj.output);
  }
  delete resultObj.ary;
}

const toJSON = (toJSONObj) => {
  //toJSONObjをjsonにして、リソースを更新する
  const result = toJSONObj.slice();
  result.forEach(page => {
    const list = Object.keys(page.result);
    if(!list.length) return;
    list.forEach(key =>{
      parseItem(page.result[key]);
    })
  })

  //remove element
  //convert
  const resultPath = "data/output.json"
  const { decycle } = require('json-cyclic');

  fs.writeFile(resultPath,JSON.stringify(decycle(result),null,2),
  (err) =>{ if(err) console.log(`error!::${err}`)});
}

const parseData = () => {
  // tools/result/のhtmlを取得
  const {targetList} = require("./data");
  const result = [];

  targetList.forEach((d)=>{
    try{
      const data = fs.readFileSync(`tools/result/${d.resultName}.html`, "utf-8")
      //parsedJSON
      result.push(HTMLParsedJSON(data,d));
    }catch(e){
      console.log(e.message);
    }
  })

  toJSON(result);
}

module.exports = {getHTMLData,parseData};