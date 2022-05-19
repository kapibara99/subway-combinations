//actionで返したtypeを元にswitch文を記述します

const initialState = {
  checked: false
}

export default function Reducer(state=initialState, action:any) {
  switch(action.type){
    case "changeCheckedState":
      return Object.assign({}, state, {
        checked: !action.currentState.state
      })
    //ここにcaseでaction-reducerの関係を作っていく
    default:
      return state;
  }
}