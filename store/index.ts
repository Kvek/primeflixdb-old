import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import config from '@store/config.reducer';

const devTools = true;
const middleware = [thunkMiddleware, logger];
const reducer = combineReducers({ config });

export const store = configureStore({
  devTools,
  middleware,
  reducer,
});

export type RootStateType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const selectStore = (store: RootStateType) => store;
