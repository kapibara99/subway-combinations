import * as Actions from "./action";
import initialState from "./initializeState";

export const dataReducer = (state = initialState.data,action:any) => {
  switch(action.type){
    case Actions.SET_OPTIONS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}