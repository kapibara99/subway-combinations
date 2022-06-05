import { useState } from 'react';

//mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

type Props = {
  name: string,
  value: Data,
}
export const ResultCard = (props:Props) => {
  const [data , setData] = useState(props.value);
  const [currentTab,setCurrentTab] = useState(0);
  const contentIdTemp = "simple-tab-"
  const buttonIdTemp = "simple-tabpanel-"

  const setTabButtons = (sizeArray:Size[]) => {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setCurrentTab(newValue);
    };
    return (
      <Tabs value={currentTab} onChange={handleChange} centered>
        {sizeArray.length > 1 && sizeArray.map((size,index) => (
          <Tab label={size.name} id={`${buttonIdTemp}${index}`} aria-controls={`${contentIdTemp}${index}`}/>
        ))}
      </Tabs>
    )
  }
  const setTabContent = (size:Size,index:number) => {
    return (
      <div
      className="c-card__tabContent"
      role="tabpanel"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      data-tab-value={size.name}
      >
        {currentTab === index && (
          <div className="c-card__props">
            {size.price && <div className="c-card__prop-item -price">¥{size.price}</div>}
            {size.carbohydrate && <div className="c-card__prop-item -carbohydrate">糖質 : {size.carbohydrate}g</div>}
            {size.kcal && <div className="c-card__prop-item -kcal">{size.kcal}kcal</div>}
          </div>
        )}
      </div>
    )
  }


  return(
    <div className="c-card -no-image">
      <h3 className="c-card__title">{data.name}</h3>
      {data.size?.length && setTabButtons(data.size)}
      {data.size?.map((sizeObj,index) => (setTabContent(sizeObj,index)))}
    </div>
  );
}
