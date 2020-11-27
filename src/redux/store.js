import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga.js';
import galleryReducer from './slices/gallerySlice';

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
  reducer: {
    albums: galleryReducer,
  },
  middleware: [...getDefaultMiddleware(),  sagaMiddleware]
});

sagaMiddleware.run(sagas);

export default store;