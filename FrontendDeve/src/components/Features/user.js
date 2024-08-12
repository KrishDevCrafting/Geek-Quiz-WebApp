import { createSlice } from "@reduxjs/toolkit";

const initiStateValue = {

     
};

const userSilce = createSlice({
  name: "user",
  initialState: {
    value: initiStateValue,
  },
  reducers: {
    userLogic: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogic } = userSilce.actions;
export default userSilce.reducer;
