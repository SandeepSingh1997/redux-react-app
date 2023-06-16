import { createSlice } from "@reduxjs/toolkit";

const initialTasksValue = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: initialTasksValue },
  reducers: {
    create: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter(
        (task) => task.id !== action.payload.taskId
      );
    },
    markComplete: (state, action) => {
      const taskId = action.payload.taskId;
      const isDone = action.payload.isDone;

      state.value = state.value.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone: isDone };
        }
        return task;
      });
    },
  },
});

export const { create, deleteTask, markComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
