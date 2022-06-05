import * as React from 'react';

//mui
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {  updatePriceOptions } from '../../redux/searchOptions/action';
import { RootStateType } from '../../redux/type';

function valuetext(value: number) {
  return `¥${value}`;
}

// config initialize
const minDistance = 100;
const maxValue = 1000;
const minValue = 100;

export default function MinimumDistanceSlider() {
  const dispatch = useDispatch();
  const searchOptions = Object.assign([],useSelector((state:RootStateType) => state.searchOptions.PriceOption));

  const [value, setValue] = React.useState<number[]>([searchOptions.min, searchOptions.max]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], maxValue - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
    dispatch(updatePriceOptions(value[0],value[1]))
  };


  return (
    <>
    <h2>希望価格の設定</h2>
    <Box sx={{ width: 300 , margin: "auto"}}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        max = {maxValue}
        min = {minValue}
        color="secondary"
      />
    </Box>
    </>
  );
}
