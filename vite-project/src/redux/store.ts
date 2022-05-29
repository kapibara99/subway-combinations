import{ createStore , combineReducers , applyMiddleware , compose }from "redux";
import { dataReducer } from "./MenuData/reducers";
import { searchOptionsReducer } from "./searchOptions/reducers";


export default function createReduxStore(){
  return createStore(
    combineReducers({
      menuData:dataReducer,
      searchOptions:searchOptionsReducer,
    }),
  )
}
