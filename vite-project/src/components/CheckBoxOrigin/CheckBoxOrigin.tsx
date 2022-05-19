import { useState , useEffect } from 'react'
//mui
import {Checkbox , FormControlLabel} from '@mui/material';
import { changeCheckedFunction } from '../../redux/actions/action';

export const CheckBoxOrigin = (prop:checkBoxType) => {
  const [isChecked , setIsChecked] = useState(false);
  const {id , label} = prop;
  let {checked} = prop;
  checked = isChecked
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    changeCheckedState();
    checked = isChecked;
  }
  const changeCheckedState = () => {
    changeCheckedFunction(checked,label);
  }
  return (
    <FormControlLabel key={String(id)} control={<Checkbox onChange={((e) => handleChange(e))} checked={checked}/>} label={label} />
  )
}

// redux
import { bindActionCreators } from 'redux';//reduxの機能
import { connect } from 'react-redux';//react-reduxの機能
import * as Actions from '../../redux/actions/action';

function mapStateToProps(state:any) {
  return state;
}
function mapDispatchToProps(dispatch:any) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxOrigin)
