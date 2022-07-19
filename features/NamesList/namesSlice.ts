import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type NameListType = {
  id: number;
  name: string;
  ticked: boolean;
};

const initialState: NameListType[] = [];

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action: PayloadAction<NameListType>) {
      state.push(action.payload);
    },
    tickName(state, action: PayloadAction<number>) {
      const name = state.find((name) => name.id === action.payload);
      if (name) name.ticked = !name.ticked;
    },
    removeName(state, action: PayloadAction<number>) {
      return state.filter((name) => name.id !== action.payload);
    },
  },
});

export const { addName, tickName, removeName } = namesSlice.actions;
export default namesSlice.reducer;
