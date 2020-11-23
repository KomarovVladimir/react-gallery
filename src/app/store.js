import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
