import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
