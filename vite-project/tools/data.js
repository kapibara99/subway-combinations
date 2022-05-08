/**
 * @param {string} url - スクレイピングするURL
 * @param {string} getQuery - JSONに落としたい対象のcss query
 * @param {string} resultName - 出力先のファイル名
*/
const targetList = [
  {
    url:"https://www.subway.co.jp/index.html",
    getQuery : "",
    resultName : "index"
  }
]

module.exports = targetList;