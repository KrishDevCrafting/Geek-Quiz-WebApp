import { createSlice } from "@reduxjs/toolkit";

const initiStateValue = "";
const QuizLogic = createSlice({
  name: "cardsLogic",
  initialState: {
    value: initiStateValue,
  },
  reducers: {
    DynamicQuiz: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { DynamicQuiz } = QuizLogic.actions;
export default QuizLogic.reducer;
