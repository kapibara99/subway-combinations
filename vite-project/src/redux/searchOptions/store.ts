import{ createStore as reduxCreateStore , combineReducers }from "redux";
import { dataReducer } from "./reducers";

export default function createStore(){
  return reduxCreateStore(
    combineReducers({
      menuData:dataReducer,
    })
  )
}