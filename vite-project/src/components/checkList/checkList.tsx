//mui
import { useEffect, useState } from 'react';
import { CheckBoxOrigin } from '../../components/CheckBoxOrigin/CheckBoxOrigin';

// styles
import "./checkList.scss"

import { useDispatch , useSelector} from 'react-redux';
import { setFirstOptions , setOption , updateOptions } from '../../redux/searchOptions/action';
import { store } from '../../main';

// config
const checkBoxLabels = [
  "セットあり",
  "サイドメニューあり",
  "店舗限定メニューあり"
]

export const CheckList = () => {
  const dispatch = useDispatch();
  dispatch(setFirstOptions(checkBoxLabels));
  const searchOptions = Object.assign([],setFirstOptions(checkBoxLabels).payload.array);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const obj:InitializeSearchOption = {
      name:e.target.value,
      flag:e.target.checked
    }
    searchOptions.forEach((v:InitializeSearchOption)=>{
      if(v.name == e.target.value){
        v.flag = e.target.checked;
      }
    })
    dispatch(updateOptions(searchOptions));
  }

    return (
      <>
      <h2>検索オプション</h2>
      <div className="c-checkList">
        <div className="c-checkList__inner">
        {searchOptions.map((item:InitializeSearchOption,i:number)=>{
          i += 1
          return (
            <CheckBoxOrigin key={item.name} id={String(item.name)} onChange={handleChange} label={item.name} checked={item.flag}/>
          )
        })}
        </div>
      </div>
      </>
  )
}