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
interface InitializeSearchOption {
  name:string,
  flag:boolean,
}
