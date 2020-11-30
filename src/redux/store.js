import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga.js';
import albumsReducer from './slices/albumsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({albums: albumsReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),  sagaMiddleware]
});

sagaMiddleware.run(sagas);

export default store;