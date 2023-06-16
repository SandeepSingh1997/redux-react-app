import { createSlice } from "@reduxjs/toolkit";

const initialTasksValue = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: initialTasksValue },
  reducers: {
    create: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { create } = tasksSlice.actions;

export default tasksSlice.reducer;
