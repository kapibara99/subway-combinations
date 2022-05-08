// https://sushi.karaage.tokyo/article/2021-05-13


const {targetList} = require("./data");
const { getHTMLData } = require("./modules");




Promise.all(
  targetList.map(obj => getHTMLData(obj))
  ).then(
    (htmls)=>{htmls.forEach((html) => {
      //toJSONする
    })}
  ).then(()=>{
    console.log("done.")
  }
  )



