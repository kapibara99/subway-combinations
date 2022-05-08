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
module.exports = {targetList,freeToppingList};