import{ createStore , combineReducers , applyMiddleware , compose }from "redux";
import { menuDataReducer } from "./MenuData/reducers";
import { searchOptionsReducer } from "./searchOptions/reducers";


//set type of window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;
const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createReduxStore(){
  return createStore(
    combineReducers({
      menuData:menuDataReducer,
      searchOptions:searchOptionsReducer,
    }),
    composeReduxDevToolsEnhancers(applyMiddleware())
  )
}