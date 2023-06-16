import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "NA", gender: "NA" };

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      initialState.value = action.payload;
    },
  },
});

export default userSlice.reducer;
