import { createSlice } from "@reduxjs/toolkit";

// type NameListType = {
//   id: number;
//   name: string;
//   ticked: boolean;
// };

const initialState: string[] = [];

// const namesSlice = createSlice({
//   name: "names",
//   initialState,
//   reducers: {
//     nameAdded(state, action) {
//       state.push({
//         id: action.payload.id,
//         name: action.payload.text,
//         ticked: false,
//       });
//     },
//     nameTicked(state, action) {
//       const name = state.find((name) => name.id === action.payload);
//       if (name) name.ticked = !name.ticked;
//     },
//   },
// });

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action) {
      state.push(action.payload);
    },
    removeName(state, action) {
      return state.filter((name) => name !== action.payload);
    },
  },
});

export const { addName, removeName } = namesSlice.actions;
export default namesSlice.reducer;
