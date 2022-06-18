import React, { useState , useEffect } from 'react'

// original
import { MarginSet } from '../components/usuallyMargin/MarginSet';
import ResultList from '../components/ResultList/resultList';

//redux
import { useDispatch, useSelector } from 'react-redux';


export const Result = () => {
  //variable
  const dispatch = useDispatch();
  // const options = useSelector((state:RootStateType) => state.searchOptions);
  // const resultData = useSelector((state:RootStateType) => state.menuData);


  // element
  return (
    <main>
      <MarginSet value="middle"/>
      <h1>
        <span>提案結果</span>
      </h1>
      <MarginSet value="middle"/>
      <ResultList />
      <MarginSet value="middle"/>
    </main>
  )
}