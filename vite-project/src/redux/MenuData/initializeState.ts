
interface InitializeMenuData {
  data: Data[],
  time ? : Date,
  func ? : Function,
}
const initialState:InitializeMenuData = {
  data:[],
}

export default initialState;