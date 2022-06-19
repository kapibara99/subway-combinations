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
  SliderOptions : InitializeSliderOptions
}
interface InitializeSliderOptions {
  [key: string]:any,
  PriceOption:slideBarValues,
  CarbohyOption:slideBarValues,
  KcalOption:slideBarValues,
}

interface slideBarValues {
  min:number,
  max:number
}
interface SearchOption {
  name:string,
  key:string,
  flag:boolean,
}
