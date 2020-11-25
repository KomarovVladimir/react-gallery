import { configureStore } from '@reduxjs/toolkit';
import mySaga from './sagas'
import rootReducer from './reducers';
import counterReducer from './slices/counterSlice';

export default configureStore({
  reducer: rootReducer,
});
