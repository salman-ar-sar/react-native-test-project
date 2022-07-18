import { configureStore } from "@reduxjs/toolkit";
import namesListReducer from "../features/NamesList/namesSlice";

export const store = configureStore({
  reducer: {
    namesList: namesListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
