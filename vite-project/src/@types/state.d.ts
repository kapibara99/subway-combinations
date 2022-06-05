interface InitializeMenuData {
  Sandwich:Data[],
  freeTopping:Data[],
  paidOptions:{
    topping:Data[],
    SetMenu:Data[],
    SideMenu:Data[],
  },
  updateTime ? : Date,
}
interface InitializeSearchOption {
  name:string,
  flag:boolean,
}
