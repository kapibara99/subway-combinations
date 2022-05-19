//mui
import { useEffect, useState } from 'react';
import { CheckBoxOrigin } from '../components/CheckBoxOrigin/CheckBoxOrigin';

// styles
import "../components/checkList/checkList.scss"

const checkBoxLabels = [
  "セットあり",
  "サイドメニューあり",
  "店舗限定メニューあり"
]
const checkFlags = checkBoxLabels.map((v)=>false);



export const Home = () => {

    return (
    <main>
      <div className="c-checkList">
        <div className="c-checkList__inner">
        {checkBoxLabels.map((item,i)=>{
          i += 1
          return (
            <CheckBoxOrigin key={item} id={String(i)} label={item} checked={checkFlags[i]}/>
          )
        })}
        </div>
      </div>
    </main>
  )
}