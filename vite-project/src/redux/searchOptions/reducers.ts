import * as Actions from "./action";
import initialState from "./initializeState";

export const searchOptionsReducer = (state = initialState,action:any) => {
  switch(action.type){
    case Actions.UPDATE_OPTIONS:
    case Actions.SET_FIRST_OPTIONS:
      return {
        array:action.payload.array
      };
    case Actions.SET_OPTIONS:
      const s = state.array;
      console.log(s);

      state.array.forEach((v:InitializeSearchOption)=>{
        if(v.name = action.payload.name){
          v.flag = action.payload.flag;
        }
      })
      console.log(state,action.payload);
      return {
        ...state,
      }
    default:
      return state;
  }
}