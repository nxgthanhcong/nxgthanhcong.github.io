import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ABOUT } from "../../constants/navigation";

const initialState = {
  activedNavigationItem: ABOUT,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActivedNavigationItem: (state, action: PayloadAction<string>) => {
      state.activedNavigationItem = action.payload;
    },
  },
});

export const { setActivedNavigationItem } = appSlice.actions;

export default appSlice.reducer;
