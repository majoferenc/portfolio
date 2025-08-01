import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import aboutReducer from "./contact/ContactSlice";
import sidebarRedurer from "../components/Sidebar/SidebarSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    sidebar: sidebarRedurer,
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
