import { menuStringType } from "../../@types/element";


export async function postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // accept:'text\/html,application\/xhtml+xml,application\/xml;q=0.9,image\/avif,image\/webp,image\/apng,\*\/\*;q=0.8,application\/signed-exchange;v=b3;q=0.9',
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
  })
  return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
}
export const editData = (type:menuStringType,origin:InitializeMenuData,option:InitializeSearchOptions):Data[] => {
  const ary = Object.assign([],origin.Sandwich);
  let result:Data[] = [];
  switch (type){
    case "Sandwich":
    default :
      if(ary.length){
        const addSearchOptionsData = searchOptionFilter(option.SearchOption,ary,origin.PaidOptions);
        // console.log("addSearchOptionsData",addSearchOptionsData);
        const sliderFiltered = slideFilter(option.SliderOptions,addSearchOptionsData);
        // console.log("sliderFiltered",sliderFiltered);
        result = random(3,sliderFiltered);
      }
      break;
  }
  // console.log("result",result);
  return result;
}

/*
========================================
edit data methods
========================================
*/

//min max の値でfilterをかける
/**
 * @module    slideFilter
 * @param {object} SliderOptions - same SliderOptions.XXX : slideBarValues
 * @param {string} origin - 元の配列
 * @return {string}   filter後の配列
*/
const slideFilter = (SliderOptions:InitializeSliderOptions,origin:Data[]):Data[] => {

  let result:Data[] = origin;
  Object.keys(SliderOptions).forEach((key)=>{
    const option = SliderOptions[key];
    switch (key){
      case "PriceOption":
        result = result.filter((data)=>{
          const price = data.size[0] ? data.size[0].price : data.price;
          if(price && price >= option.min && price <= option.max){
            return data;
          }
        })
        return result;
      case "CarbohyOption":
        result = result.filter((data)=>{
          const carbohy = data.size[0] ? data.size[0].carbohydrate : data.carbohydrate;
          if(carbohy && carbohy >= option.min && carbohy <= option.max){
            return data;
          }
        })
        return result;
      case "KcalOption":
        result = result.filter((data)=>{
          const kcal = data.size[0] ? data.size[0].kcal : data.kcal;
          if(kcal && kcal >= option.min && kcal <= option.max){
            return data;
          }
        })
        return result;
      default:
        return result;
    }
  })
  return result;
}

//search Optionを取り込む
const searchOptionFilter = (SearchOption:SearchOption[],origin:Data[],paidOptions:any):Data[] => {
  if(!SearchOption.length) return origin;//optionがなければ素通し
  const options = SearchOption.filter((v) => v.flag).map((v) => v.key);
  if(!options.length) return origin;

  let result:Data[] = origin.slice();
  options.forEach((key)=>{
    if(paidOptions[key]){
      result = [...result,...paidOptions[key]]
    }
  })
  // console.log("options",result,options,reduxOptions);
  return result;
}
/**
 * @module random
 * @param {number} sliceNumber - 何個返すか
 * @return {Output[]} - 表示用のメニュー情報を配列で返す
*/
const random = (sliceNumber:number,originArray:Data[]) => {
  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const ary = shuffle(originArray);
  return ary.slice(0,sliceNumber);
}
