import { useState , useEffect } from 'react'
//mui
import {Checkbox , FormControlLabel} from '@mui/material';

export const CheckBoxOrigin = (prop:checkBoxType) => {
  const [isChecked , setIsChecked] = useState(false);
  const {id , label} = prop;
  let {checked} = prop;
  checked = isChecked
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    checked = isChecked;
  }
  return (
    <FormControlLabel key={String(id)} control={<Checkbox onChange={((e) => handleChange(e))} checked={checked}/>} label={label} />
  )
}