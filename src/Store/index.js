import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import {Language, Auth} from './Reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Language'],
};

const reducers = combineReducers({
  Language,
  Auth,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [ReduxThunk],
});

export const persistedStore = persistStore(store);
