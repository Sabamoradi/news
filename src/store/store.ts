import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import newsApiSlice from "./newApi/slice";
import guardianSlice from "./guardian/slice";
import timesSlice from "./times/slice";
import {
  type TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    newsApi: newsApiSlice,
    guardian:guardianSlice,
    times:timesSlice
  },
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;