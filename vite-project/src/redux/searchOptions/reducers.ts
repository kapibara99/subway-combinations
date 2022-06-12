import * as Actions from "./action";
import initialState from "./initializeState";


export const searchOptionsReducer = (state = initialState,action:any) => {
  switch(action.type){
    case Actions.UPDATE_SEARCH_OPTIONS:
      return {
        ...state,
        ...action.payload
      };
    case Actions.UPDATE_PRICE_OPTIONS:
    case Actions.UPDATE_KCAL_OPTIONS:
    case Actions.UPDATE_CARBOHY_OPTIONS:
      const newSlideOptions = Object.assign({SliderOptions:{...state.SliderOptions,...action.payload}});
      return {
        ...state,
        ...newSlideOptions
      };
      default:
      return state;
  }
}