//mui
import { useEffect, useState } from 'react';

//router
import { Link } from "react-router-dom";

// mui
import { Box , Button } from "@mui/material";

// Local Components
import { CheckList } from '../components/checkList/checkList';
import MinimumDistanceSlider from '../components/SlideBar/SlideBar';
import { MarginSet } from '../components/usuallyMargin/MarginSet';

// redux
import { updatePriceOptions , updateCarbohyOptions ,  updateKcalOptions } from '../redux/searchOptions/action';

export const Home = () => {
    return (
    <main>
      <CheckList />
      <MarginSet value="large" />
      <h2>設定</h2>
      <>
        <h3>価格</h3>
        <MinimumDistanceSlider
          minDistance={100}
          unitName = "¥"
          minValue={100}
          maxValue={1000}
          dispatcher = {updatePriceOptions}
          />
        <MarginSet value="small" />
      </>
      <>
        <h3>糖質</h3>
        <MinimumDistanceSlider
          minDistance={100}
          unitName = ""
          minValue={500}
          maxValue={2000}
          dispatcher = {updateCarbohyOptions}
          />
        <MarginSet value="small" />
      </>
      <>
        <h3>カロリー</h3>
        <MinimumDistanceSlider
          minDistance={100}
          unitName = ""
          minValue={500}
          maxValue={2000}
          dispatcher = {updateKcalOptions}
          />
        <MarginSet value="small" />
      </>
      <MarginSet value="middle" />
      <Box textAlign='center'>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/result"
      >
      提案
    </Button>
      </Box>
      <MarginSet value="large" />
    </main>
  )
}