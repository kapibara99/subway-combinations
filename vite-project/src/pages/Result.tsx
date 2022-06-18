import React, { useState , useEffect, useRef } from 'react'

// mui
import { Box , Button } from "@mui/material";

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
  //variable
  const dispatch = useDispatch();
  const options = useSelector((state:RootStateType) => state.searchOptions);
  const resultData = useSelector((state:RootStateType) => state.menuData);
  const getMenuData = () => {
    return editData("Sandwich",resultData,options)
  }
  const [stateMenuData,setStateMenuData] = useState<Data[]>(getMenuData());

  // handle methods
  const updateMenuData = () => {
    const data = [...getMenuData()];
    setStateMenuData(data)
  }
  const clickHandler = () => {
    updateMenuData();
  }

  // call api
  useEffect(()=>{
    postData("../../data/output.json").then(data=>{
      dispatch(updateDataAction(data));
    });
  },[])
  //set data
  useEffect(()=>{
    if(stateMenuData.length === 0){
      updateMenuData();
    }else{
      return;
    }
  },[resultData])//selectorが更新されたら、エレメントもアップデートする


  // element
  return (
    <main>
      <MarginSet value="middle"/>
      <h1>
        <span>提案結果</span>
      </h1>
      <MarginSet value="middle"/>

      <div className='c-cardList'>
        {stateMenuData.length > 0 && stateMenuData.map( (data:Data,i:number) => {
          return (<ResultCard key={data.name} name = {String(i)}  value = {data}/> )
        })}
      </div>
      {!stateMenuData.length && <p>no data</p> }
      <MarginSet value="middle"/>

      <Box textAlign='center'>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => clickHandler()}
          // component={Link}
          // to="/result"
        >再提案</Button>
      </Box>


      <MarginSet value="middle"/>
    </main>
  )
}