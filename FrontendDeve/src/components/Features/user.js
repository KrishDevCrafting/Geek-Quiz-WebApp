import { createSlice } from "@reduxjs/toolkit";

const userSilce = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  reducers: {
    userLogic: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogic } = userSilce.actions;
export default userSilce.reducer;
