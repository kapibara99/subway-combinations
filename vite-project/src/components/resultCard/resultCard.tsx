import { useState } from 'react';

//mui
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./resultCard.scss"

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
      <>
        {(() => {
          if(sizeArray.length > 1){
            return (
            <Tabs key={currentTab} value={currentTab} onChange={handleChange} centered>
              {sizeArray.map((size,index) => (
                <Tab key={size.name} label={size.name} id={`${buttonIdTemp}${index}`} aria-controls={`${contentIdTemp}${index}`}/>
              ))}
            </Tabs>
            )
          }else{
            return <></>
          }
        })()}
      </>
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
      key={index}
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
    <div className="c-card -no-image" key={props.name.toString()}>
      <h3 className="c-card__title">{data.name}</h3>
      <div className="c-card__imageWrap">
        <img src={data.image} alt={data.name} />
      </div>
      {data.size?.length && setTabButtons(data.size)}
      {data.size?.map((sizeObj,index) => (setTabContent(sizeObj,index)))}
    </div>
  );
}
