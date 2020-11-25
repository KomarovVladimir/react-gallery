import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga.js';
import albumsReducer from './slices/albumsListSlice';
import imagesReducer from './slices/imagesListSlice';

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
  reducer: {
    albums: albumsReducer,
    images: imagesReducer
  },
  middleware: [...getDefaultMiddleware(),  sagaMiddleware]
});

sagaMiddleware.run(sagas);

export default store;