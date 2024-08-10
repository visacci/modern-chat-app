import { createSlice } from "@reduxjs/toolkit";
const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: "light",
  },
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
    increamentByAmount: (state, action) => {
      state.count = action.payload;
    },
  },
});
export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
