import { useState , useEffect } from 'react'

// mui
import { Box , Button } from "@mui/material";

// original
import { ResultCard } from '../resultCard/resultCard';
import { MarginSet } from '../usuallyMargin/MarginSet';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { updateDataAction } from '../../redux/MenuData/action';
import { RootStateType } from '../../redux/type';

// api
import {postData , editData} from "../../common/api/get";


const ResultList = () => {
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
    postData("data/output.json").then(data=>{
      dispatch(updateDataAction(data));
    });
  },[])
  //set data
  useEffect(()=>{
    updateMenuData();
  },[resultData])//selectorが更新されたら、エレメントもアップデートする


  // element
  return (
    <>
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
        >再提案</Button>
      </Box>
    </>
  )
}
export default ResultList;