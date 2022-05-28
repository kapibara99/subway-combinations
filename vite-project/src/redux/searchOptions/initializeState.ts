
interface InitializeSearchOptions {
  data: Data[],
  time ? : Date,
  func ? : Function,
}
const initialState:InitializeSearchOptions = {
  data:[],
}

export default initialState;