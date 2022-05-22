import * as React from 'react';
import "./margin.scss"

export const MarginSet = (props:marginSetType) => {
  const style = String(props.value) ? `margin-${props.value}` : "";
  const marginNum = !Number.isNaN(props.value) ? Number(props.value) : false;

  if(marginNum){
    return (
      <div aria-label='hidden' style={{marginBottom:marginNum}}></div>
    );
  }else{
    return (
      <div aria-label='hidden' className={style}></div>
    );
  }
}