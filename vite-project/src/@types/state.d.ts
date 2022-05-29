interface InitializeMenuData {
  data: Data[],
  time ? : Date,
  func ? : Function,
}
interface InitializeSearchOption {
  name:string,
  flag:boolean,
}
// interface PayloadAction<P, T> {
//   type: T;
//   payload: P;
//   meta ?: M;
//   error ?: E;
// }