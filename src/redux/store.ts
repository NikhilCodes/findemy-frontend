import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import courseReducer from './slices/courses.slice';

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
