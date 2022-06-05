
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
  "FreeTopping":["bread","vegetable","sauce","free-topping"],
  "PaidTopping":["topping"],
  "PaidOptions":{
    "SetMenu":["party","setmenu"],
    "SideMenu":["salad","drink"],
    "StoreOriginal":[],
  },
}

const replaceKeys = (data) => {
  let result = Object.assign({});
  const parentKey = Object.keys(parentDataList);

  parentKey.forEach((parentKey)=>{
    const isObjectFlg = (typeof parentDataList[parentKey] === "object" && !Array.isArray(parentDataList[parentKey]))
    if(isObjectFlg){
      result[parentKey] = Object.assign({});
    }else{
      result[parentKey] = Object.assign([]);
    }

    Object.keys(data).forEach((key)=>{

      if(data.status !== "skip"){
        if(isObjectFlg){
          Object.keys(parentDataList[parentKey]).forEach((optionKey)=>{
            if(!Array.isArray(result[parentKey][optionKey])){
              result[parentKey][optionKey] = [];
            }
            const optionNames = parentDataList[parentKey][optionKey];
            if(optionNames.includes(key)){
              result[parentKey][optionKey].push(data[key].output);
            }
          })
        }else{
          if(parentDataList[parentKey].includes(key)){
            data[key]["output"].forEach((d)=>{
              result[parentKey].push(d);
            })
          }
        }
      }
    })
  })
  return result;
}

module.exports = {targetList,freeToppingList,replaceKeys};