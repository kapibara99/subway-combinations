import * as Actions from "./action";
import initialState from "./initializeState";

export const menuDataReducer = (state = initialState,action:any) => {
  switch(action.type){
    case Actions.UPDATE_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}