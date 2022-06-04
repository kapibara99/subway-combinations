export async function postData(url = '', data = {}) {
  // 既定のオプションには * が付いています
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致させる必要があります
  })
  return response.json(); // JSON のレスポンスをネイティブの JavaScript オブジェクトに解釈
}

import { menuStringType } from "../../@types/element";
const initializeData:Output = {
  name:"test",
  link:"hoge",
}
export const editData = (type:menuStringType,origin:object):Output[] => {
  const obj = Object.assign(origin);
  let result:Output[] = [];
  switch (type){
    case "Sandwich":
    default :
      const ary = obj.Sandwich.sandwich;
      if(ary.length){
        result = random(3,ary);
      }else{
        result.push(initializeData);
      }
      break;
  }
  return result;
}

/**
 * @module random
 * @param {number} sliceNumber - 何個返すか
 * @return {Output[]} - 表示用のメニュー情報を配列で返す
*/
const random = (sliceNumber:number,originArray:Output[]) => {
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
