import { useState , useEffect } from 'react'
import { ResultCard } from '../components/resultCard/resultCard';
//redux
import { useDispatch, useSelector } from 'react-redux';

import {postData , editData} from "../common/api/get";
import { updateDataAction } from '../redux/MenuData/action';
import { createStore, combineReducers } from 'redux'

export const Result = () => {
  const dispatch = useDispatch();
  const selector:any = useSelector(state => state);
  const options = selector.searchOptions.array;
  const menu = selector.menuData.updateData;
  console.log(options,menu);



  useEffect(()=>{
    postData("../../data/output.json").then(data=>{
      dispatch(updateDataAction(data));
    });
  },[])

  return (
    <main>
      <ResultCard />
    </main>
  )
}