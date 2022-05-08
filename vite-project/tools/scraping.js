// https://sushi.karaage.tokyo/article/2021-05-13


const targetList = require("./data");
//import {targetList} from "./data";
//const getHTMLData = require("./scraping.modules");
const { getHTMLData,HTMLParsedJSON } = require("./modules");




Promise.all(
  targetList.map(obj => getHTMLData(obj.url,obj.resultName))
  ).then(
    (htmls)=>{htmls.forEach((html) => {
      HTMLParsedJSON(html)
    })}
  ).then(()=>{
    console.log("done.")
  }
  )



