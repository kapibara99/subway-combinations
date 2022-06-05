
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
  PriceOption:{
    min:0,
    max:1000
  }
}

export default initialState;