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

export const Home = () => {
    return (
    <main>
      <CheckList />
      <MarginSet value="large" />
      <MinimumDistanceSlider
        minDistance={100}
        minValue = {100}
        maxValue = {1000}
        unitName = "¥"
      />
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