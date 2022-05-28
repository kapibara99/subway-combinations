import { useState , useEffect } from 'react'
import { ResultCard } from '../components/resultCard/resultCard';
//redux
import { useDispatch, useSelector } from 'react-redux';

import {postData , editData} from "../common/api/get";
import { updateDataAction } from '../redux/MenuData/action';
export const Result = () => {
  const [menuData , setMenuData] = useState<Data[]>([]);
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  useEffect(()=>{
    postData("../../data/output.json").then(data=>{
      console.log("a",data);
      // dispatch(updateDataAction(menuData));
      // const test = useSelector(state => state)
      // console.log(test);
    });
  },menuData)
  console.log(menuData);

  // console.log(selector);


  return (
    <main>
      <ResultCard />
    </main>
  )
}