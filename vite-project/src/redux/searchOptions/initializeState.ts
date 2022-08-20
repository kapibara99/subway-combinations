
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
      min:400,
      max:600
    },
    CarbohyOption:{
      min:0,
      max:100
    },
    KcalOption:{
      min:100,
      max:2000
    },
  }
}

export default initialState;