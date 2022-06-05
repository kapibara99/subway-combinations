interface InitializeMenuData {
  Sandwich:Data[],
  FreeTopping:Data[],
  PaidTopping:Data[],
  PaidOptions:{
    SetMenu:Data[],
    SideMenu:Data[],
    StoreOriginalMenu:Data[],
  },
  updateTime ? : Date,
}
interface InitializeSearchOptions {
  SearchOption:SearchOption[],
  PriceOption:PriceOption
}
interface PriceOption {
  min:number,
  max:number
}
interface SearchOption {
  name:string,
  key:string,
  flag ?:boolean,
}
