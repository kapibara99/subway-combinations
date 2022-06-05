import { useEffect, useState } from 'react';

// styles
import { CheckBoxOrigin } from '../../components/CheckBoxOrigin/CheckBoxOrigin';
import "./checkList.scss"

//redux
import { useDispatch , useSelector} from 'react-redux';
import {  updateOptions } from '../../redux/searchOptions/action';
import { RootStateType } from '../../redux/type';


export const CheckList = () => {
  const dispatch = useDispatch();
  const searchOptions = Object.assign([],useSelector((state:RootStateType) => state.searchOptions.SearchOption));

  const [checkboxInfo,setCheckBoxInfo] = useState(searchOptions);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    searchOptions.forEach((v:SearchOption)=>{
      if(v.name == e.target.value){
        v.flag = e.target.checked;
      }
    })
    setCheckBoxInfo(searchOptions);
    dispatch(updateOptions(searchOptions));
  }

    return (
      <>
      <h2>検索オプション</h2>
      <div className="c-checkList">
        <div className="c-checkList__inner">
        {checkboxInfo.map((item:SearchOption,i:number)=>{
          i += 1
          return (
            <CheckBoxOrigin key={item.key} id={item.key} onChange={handleChange} label={item.name} checked={item.flag}/>
          )
        })
        }
        </div>
      </div>
      </>
  )
}