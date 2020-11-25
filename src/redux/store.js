import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import counterReducer from './slices/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
