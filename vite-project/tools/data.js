/**
 * @param {string} url - スクレイピングするURL
 * @param {string} getQuery - JSONに落としたい対象のcss query
 * @param {string} resultName - 出力先のファイル名
*/
const targetList = [
  {
    url:"https://www.subway.co.jp/menu/sandwich/",
    getQuery : "ul.productList > li",
    resultName : "sandwich",
    getOptionFlag:true
  },
  {
    url:"https://www.subway.co.jp/menu/salad/",
    getQuery : "ul.productList > li",
    resultName : "salad",
    getOptionFlag:false
  },
  {
    url:"https://www.subway.co.jp/menu/sidemenu/",
    getQuery : "ul.productList > li",
    resultName : "sidemenu",
    getOptionFlag:false
  },
  {
    url:"https://www.subway.co.jp/menu/drink/",
    getQuery : "ul.productList > li",
    resultName : "drink",
    getOptionFlag:false
  },
]
const freeToppingList = [
  {
    "name":"オリーブ"
  },
  {
    "name":"ピクルス"
  },
  {
    "name":"ホットペッパー"
  }
]
const parentDataList = {
  "Sandwich":["limited","sandwich"],
  "SetMenu":["party","setmenu"],
  "SideMenu":["salad","sidemenu","drink"],
  "Require":["bread","topping","vegetable","sauce"],
  "SandwichOption":["sizeup","vegetable","free-topping"],
}
const replaceKeys = (data) => {
  const result = Object.assign({});
  const parentKey = Object.keys(parentDataList);

  parentKey.forEach((parentKey)=>{
    result[parentKey] = Object.assign({});

    Object.keys(data).forEach((key)=>{
      if(parentDataList[parentKey].includes(key) && data.status !== "skip"){
        result[parentKey][key] = data[key].output;
      }
    })
  })
  return result;
}

module.exports = {targetList,freeToppingList,replaceKeys};