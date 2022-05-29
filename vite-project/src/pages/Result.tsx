import { useState , useEffect } from 'react'
import { ResultCard } from '../components/resultCard/resultCard';
//redux
import { useDispatch, useSelector } from 'react-redux';

import {postData , editData} from "../common/api/get";
import { updateDataAction } from '../redux/MenuData/action';
import { createStore, combineReducers } from 'redux'

export const Result = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

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