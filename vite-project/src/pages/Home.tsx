//mui
import { useEffect, useState } from 'react';

// Local Components
import { CheckList } from '../components/checkList/checkList';
import MinimumDistanceSlider from '../components/SlideBar/SlideBar';

export const Home = () => {

    return (
    <main>
      <CheckList />
      <MinimumDistanceSlider />
    </main>
  )
}