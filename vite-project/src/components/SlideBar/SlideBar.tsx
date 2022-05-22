import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `¥${value}`;
}

const minDistance = 100;
const maxValue = 1000;
const minValue = 100;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState<number[]>([200, 500]);

  const handleChange1 = (
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
        setValue1([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue1([clamped - minDistance, clamped]);
      }
    } else {
      setValue1(newValue as number[]);
    }
  };


  return (
    <>
    <h2>希望価格の設定</h2>
    <Box sx={{ width: 300 , margin: "auto"}}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
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