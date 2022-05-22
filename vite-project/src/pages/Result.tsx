import { useState , useEffect } from 'react'

import { ResultCard } from '../components/resultCard/resultCard';

export const Result = (props:any) => {
  const {data , setData} = props;

  return (
    <main>
      <ResultCard />
    </main>
  )
}