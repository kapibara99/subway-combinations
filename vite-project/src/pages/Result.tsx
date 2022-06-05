import React, { useState , useEffect } from 'react'
import { ResultCard } from '../components/resultCard/resultCard';
//redux
import { useDispatch, useSelector } from 'react-redux';

import {postData , editData} from "../common/api/get";
import { updateDataAction } from '../redux/MenuData/action';
import { RootStateType } from '../redux/type';

export const Result = () => {
  const dispatch = useDispatch();
  const selector:any = useSelector(state => state);
  const options = selector.searchOptions.array;
  const recommendMenu = editData("Sandwich",useSelector((state:RootStateType) => state.menuData.Sandwich));
  console.log(recommendMenu,options);

  useEffect(()=>{
    postData("../../data/output.json").then(data=>{
      dispatch(updateDataAction(data));
    });
  },[])
  // const resultList:React.VFC = (array:Data[]) => {
  //   return
  // }
  return (
    <main>
      {/* <p>aaaa</p> */}
      {recommendMenu.map( (data:Data,i:number) =>
        <ResultCard key={i} name = {String(i)}  value = {data}/>
      )}
    </main>
  )
}