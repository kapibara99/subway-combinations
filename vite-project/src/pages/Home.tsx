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
import { useSelector } from 'react-redux';
import { RootStateType } from '../redux/type';

export const Home = () => {
  const [options,setOptions] = useState<InitializeSliderOptions>(useSelector((state:RootStateType) => state.searchOptions.SliderOptions));

  return (
    <main>
      <MarginSet value="middle" />
      <h1>
        <span>サブウェイ</span>
        <span>メニュー提案App</span>
      </h1>
      <MarginSet value="middle" />
      {/* <CheckList />
      <MarginSet value="middle" /> */}
      <h2>設定</h2>
      <>
        <MinimumDistanceSlider
          minDistance={100}
          unitName = "¥"
          minValue={100}
          maxValue={1000}
          currentValue = {options.PriceOption}
          heading="価格"
          dispatcher = {updatePriceOptions}
          />
        {/* <MarginSet value="small" /> */}
      </>
      <>
        <MinimumDistanceSlider
          minDistance={1}
          unitName = ""
          minValue={0}
          maxValue={200}
          currentValue = {options.CarbohyOption}
          heading="糖質"
          dispatcher = {updateCarbohyOptions}
          />
        {/* <MarginSet value="small" /> */}
      </>
      <>
        <MinimumDistanceSlider
          minDistance={100}
          unitName = ""
          minValue={500}
          maxValue={2000}
          currentValue = {options.KcalOption}
          heading="カロリー"
          dispatcher = {updateKcalOptions}
          />
        {/* <MarginSet value="small" /> */}
      </>
      <MarginSet value="middle" />
      <Box textAlign='center'>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/result"
        >提案</Button>
      </Box>
      <MarginSet value="middle" />
    </main>
  )
}