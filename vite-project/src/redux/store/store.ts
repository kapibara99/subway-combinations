// import {createStore,  applyMiddleware} from 'redux';//reduxの機能
// import Reducer from '../reducers/reducer';　//ファイル追加②
// import {createLogger} from 'redux-logger';//ログを出力したいので入れてます

// export default function configureStore() {
//   const logger = createLogger({logger:console});
//   const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
//   const store = createStoreWithMiddleware(Reducer);
//   return store;
// }
import { configureStore } from '@reduxjs/toolkit';
import checkBoxSlicer from '../../components/CheckBoxOrigin/checkBoxSlice';

export const store = configureStore({
  reducer: {
    checkBox: checkBoxSlicer,
  },
});
