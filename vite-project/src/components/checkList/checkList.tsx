//mui
import { useEffect, useState } from 'react';
import { CheckBoxOrigin } from '../../components/CheckBoxOrigin/CheckBoxOrigin';

// styles
import "./checkList.scss"

// config
const checkBoxLabels = [
  "セットあり",
  "サイドメニューあり",
  "店舗限定メニューあり"
]
interface checkInfo {
  name : string,
  val : boolean
}
export const checkFlags = checkBoxLabels.map<checkInfo>((v,i)=>{
  const obj = Object.assign({});
  obj.name = checkBoxLabels[i];
  obj.val = false//initialize
  return obj;
});

export const CheckList = () => {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    checkFlags.forEach((obj)=>{
      if(obj.name === e.target.value){
        obj.val = e.target.checked;
        return
      }
    })
  }

    return (
      <>
      <h2>検索オプション</h2>
      <div className="c-checkList">
        <div className="c-checkList__inner">
        {checkFlags.map((item,i)=>{
          i += 1
          return (
            <CheckBoxOrigin key={item.name} id={String(item.name)} onChange={handleChange} label={item.name} checked={item.val}/>
          )
        })}
        </div>
      </div>
      </>
  )
}