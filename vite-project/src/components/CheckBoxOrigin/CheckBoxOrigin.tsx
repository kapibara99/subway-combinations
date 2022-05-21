import { useState , useEffect } from 'react'
//mui
import {Checkbox , FormControlLabel} from '@mui/material';


export const CheckBoxOrigin = (prop:checkBoxType) => {
  let {id , label , checked , onChange} = prop;
  let [isChecked,setChecked] = useState(checked);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(e);
  }

  return (
    <FormControlLabel key={String(id)} control={<Checkbox onChange={handleChange} value={label} checked={isChecked}/>} label={label} />
  )
}