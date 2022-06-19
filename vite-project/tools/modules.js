
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
    //もし空なら正規表現で探してみる
    function setInfo(element,object,cheerioLoaded){
      if(!object.price){
        object.price = Number(String(String(cheerioLoaded(element).text()).match(/[\¥|\¥|\￥][0-9]*[0-9]/)).replace("￥","").replace("¥",""));
      }
      if(!object.carbohydrate){
        object.carbohydrate = Number(String(String(cheerioLoaded(element).text()).match(/糖質 [0-9.]*[0-9]/)).replace("g","").replace("糖質 ",""));
      }
      if(!object.kcal){
        object.kcal = Number(String(String(cheerioLoaded(element).text()).match(/[0-9]*[0-9]kcal/)).replace("kcal",""));
      }
    }

const setItemInfo = (element,resultAry,name) => {
  const temp = Object.assign({},parentTemplate);
  const $ = cheerio.load(element);
  temp.name = $(".product_name_ja").text();
  if(!temp.name.length){
    temp.name = $(".product_name h4").text();
  }
  temp.link = $("li > a").attr("href");
  temp.category = name;
  temp.size = []
  temp.image = "https://www.subway.co.jp" + $(".product_image img").attr("src");

  const priceAreaAry = Array.from($(".price_area"));
  priceAreaAry.forEach(el => {
    const obj = Object.assign({},priceTemplate);
    const $$ = cheerio.load(el);
    const priceName = $$(".price_name").text();

    //set
    obj.name = priceName;
    obj.price = Number($$(".price_yen").text().replace("￥","").replace("¥",""));
    obj.carbohydrate = Number($$(".price_carb").text().replace("g","").replace("糖質 ",""));
    obj.kcal = Number($$(".price_kcal").text().replace("kcal",""));


    const moreSearchEl = Array.from($$(".descBox"));
    moreSearchEl.forEach((el)=>{
      setInfo(el,obj,$$);
    })
    setInfo(el,obj,$$);
    if(obj.name !== "" &&( obj.price || obj.carbohydrate || obj.kcal )){
      temp.size.push(obj);
    }else if(obj.price || obj.carbohydrate || obj.kcal){
      temp.price = obj.price
      temp.carbohydrate = obj.carbohydrate
      temp.kcal = obj.kcal
    }
  })
  if(temp.size.length){
    const {price,carbohydrate,kcal} = temp.size[0];//最初のサイズをpriceとする
    temp.price = price
    temp.carbohydrate = carbohydrate
    temp.kcal = kcal
  }else{
    setInfo(element,temp,$)
  }
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
      temp.category = resultObj.name;
      temp.size = [];
      resultObj.output.push(temp);
    });
    delete resultObj.ary;
    return;
  }

  for(var i = 0; i < resultObj.ary.length; i++){
    const el = resultObj.ary[i];
    setItemInfo(el,resultObj.output,resultObj.name);
  }
  delete resultObj.ary;
}

const setMostMinMax = (data) => {
  const obj =  Object.assign({});
  Object.keys(data).forEach((key)=>{
    if(typeof(obj[key]) !== "object"){
      obj[key] = Object.assign({});
    }
    // console.log(obj);


    if(Array.isArray(data[key])){
      setting(data[key],key,"price",obj);
      setting(data[key],key,"carbohydrate",obj);
      setting(data[key],key,"kcal",obj);
    }else{
      Object.keys(data[key]).forEach((key2) => {
        if(typeof(obj[key2]) !== "object"){
          obj[key2] = Object.assign({});
          if(obj[key]){
            delete obj[key];
          }
        }
        setting(data[key][key2],key2,"price",obj);
        setting(data[key][key2],key2,"carbohydrate",obj);
        setting(data[key][key2],key2,"kcal",obj);
      })
    }
  })
  data.MinMax = Object.assign({},obj);

  function setting(array,keyName,valueName,obj){
    if(!array.length) return;
    const checkAry = array.slice().filter((v) => Number(v[valueName])).map((v)=>v[valueName]);
    obj[keyName][valueName + "-min"] = Math.min(...checkAry) || null;
    obj[keyName][valueName + "-max"] = Math.max(...checkAry) || null;
  }

  return data;
}
const toJSON = (toJSONObj) => {
  //toJSONObjをjsonにして、リソースを更新する
  let output = Object.assign({});
  let fin = Object.assign({})
  const keys = Object.keys(toJSONObj);
  keys.forEach(k => {
    const list = Object.keys(toJSONObj[k].result);
    if(!list.length) return;
    list.forEach(key =>{
      parseItem(toJSONObj[k].result[key]);
      output[key] = toJSONObj[k].result[key]
    })
  })
  const {replaceKeys} = require("./data");
  fin = replaceKeys(output);
  fin = setMostMinMax(fin);

  //remove element
  //convert
  const resultPath = "public/data/output.json"
  const { decycle } = require('json-cyclic');

  fs.writeFile(resultPath,JSON.stringify(decycle(fin),null,2),
    (err) =>{ if(err) console.log(`error!::${err}`)}
  );
}

const parseData = () => {
  // tools/result/のhtmlを取得
  const {targetList} = require("./data");
  const result = Object.assign({});

  targetList.forEach((d)=>{
    try{
      const data = fs.readFileSync(`tools/result/${d.resultName}.html`, "utf-8")
      //parsedJSON
      // result.push(HTMLParsedJSON(data,d));
      result[d.resultName] = HTMLParsedJSON(data,d);
    }catch(e){
      console.log(e.message);
    }
  })

  toJSON(result);
}

module.exports = {getHTMLData,parseData};