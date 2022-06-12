import * as React from 'react';

//mui
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// redux
import { useDispatch } from 'react-redux';
//type
import { SlideBar } from '../../@types/element';

export default function MinimumDistanceSlider(props:SlideBar) {
  const {minDistance , maxValue , minValue , unitName , dispatcher } = props;
  const dispatch = useDispatch();

  const initializeValue = maxValue / 2;
  const [value, setValue] = React.useState<number[]>([minValue, initializeValue]);

  const valuetext = (n:number) => {
    return `${unitName}${n}`
  }
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
    dispatch(dispatcher(value[0],value[1]))
  };


  return (
    <>
    <p>{valuetext(value[0])} 〜 {valuetext(value[1])}</p>
    <Box sx={{ width: 300 , margin: "auto"}}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        max = {maxValue}
        min = {minValue}
        color="secondary"
      />
    </Box>
    </>
  );
}
