import React, { useState , useEffect } from 'react'

// original
import { ResultCard } from '../components/resultCard/resultCard';
import { MarginSet } from '../components/usuallyMargin/MarginSet';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { updateDataAction } from '../redux/MenuData/action';
import { RootStateType } from '../redux/type';

// api
import {postData , editData} from "../common/api/get";


export const Result = () => {
  const dispatch = useDispatch();
  const selector:any = useSelector(state => state);
  const options = selector.searchOptions;
  const recommendMenu = editData("Sandwich",useSelector((state:RootStateType) => state.menuData.Sandwich),options);

  useEffect(()=>{
    postData("../../data/output.json").then(data=>{
      dispatch(updateDataAction(data));
    });
  },[])

  return (
    <main>
      <MarginSet value="middle"/>
      <h1>
        <span>サブウェイ</span>
        <span>メニュー提案App</span>
      </h1>
      <MarginSet value="middle"/>

      <div className='c-cardList'>
        {recommendMenu.length && recommendMenu.map( (data:Data,i:number) =>
          <ResultCard key={i} name = {String(i)}  value = {data}/>
        )}
      </div>
      {!recommendMenu.length && <p>no data</p> }
      <MarginSet value="middle"/>
    </main>
  )
}