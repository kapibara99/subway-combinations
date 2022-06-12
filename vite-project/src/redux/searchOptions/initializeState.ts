
const initialState:InitializeSearchOptions = {
  SearchOption:[
    {
      name:"セットあり",
      key:"SetMenu",
      flag:false,
    },
    {
      name:"サイドメニューあり",
      key:"SideMenu",
      flag:false,
    },
    {
      name:"店舗限定メニューあり",
      key:"StoreOriginal",
      flag:false,
    },
  ],
  SliderOptions : {
    PriceOption:{
      min:0,
      max:1000
    },
    CarbohyOption:{
      min:300,
      max:1000
    },
    KcalOption:{
      min:300,
      max:1000
    },
  }
}

export default initialState;