import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';

import { RootStateType } from '.';

type ConfigType = {
  loading: boolean;
};

const state = {
  loading: true,
};

export const SET_LOADING = createAction<boolean>('SET_LOADING');

const reducer = createReducer(state, (builder) => {
  builder.addCase(SET_LOADING, (state, { payload }) => {
    state.loading = payload;
  });
});

export default reducer;

export const selectConfig = ({ config }: RootStateType) => config;

export const selectLoading = createSelector(
  selectConfig,
  ({ loading }: ConfigType) => loading
);
