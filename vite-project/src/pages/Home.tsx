//mui
import { useEffect, useState } from 'react';

// Local Components
import { CheckList } from '../components/checkList/checkList';
import MinimumDistanceSlider from '../components/SlideBar/SlideBar';
import { MarginSet } from '../components/usuallyMargin/marginSet';

export const Home = () => {
    return (
    <main>
      <CheckList />
      <MarginSet value="large" />
      <MinimumDistanceSlider />
      <MarginSet value="large" />

    </main>
  )
}