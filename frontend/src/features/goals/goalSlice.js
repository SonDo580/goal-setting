import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalService from "./goalService";

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

export const createGoal = createAsyncThunk(
  "goals/create",
  async (goalData, thunkAPI) => {
    try {
      return await goalService.create(goalData);
    } catch (err) {
      console.log(err);
      const message = "Error create goal";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
