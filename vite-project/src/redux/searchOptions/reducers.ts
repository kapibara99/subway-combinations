import * as Actions from "./action";
import initialState from "./initializeState";

export const searchOptionsReducer = (state = initialState,action:any) => {
  switch(action.type){
    case Actions.UPDATE_OPTIONS:
      return {
        ...state,
        ...action.payload
      };


    default:
      return state;
  }
}