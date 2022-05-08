
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
          default :
            break;
        }

        if(resultArray.length){
          obj.result[objName].ary = Array.from(new Set(resultArray));
          obj.result[objName].id = id;
          obj.result[objName].name = objName;
        }
        console.log(`result:${objName}`,obj.result[objName].ary.length,resultArray.length);
      })

    }else{
      obj.result[obj.resultName] = Object.assign({});
      obj.result[obj.resultName].ary = $(obj.getQuery);
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
const parseItem = (resultObj) => {
  if(resultObj.status === "skip") return;
  if(resultObj.status === "already") {
    resultObj.output = resultObj;
  }
}

const toJSON = (toJSONObj) => {
  //toJSONObjをjsonにして、リソースを更新する
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
  console.log(result);


}

module.exports = {getHTMLData,parseData};