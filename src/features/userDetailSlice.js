import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create Async thunk

export const userDetal = createAsyncThunk(
  "createUser",
  async (data, { rejectwithValue }) => {
    const response = await fetch(
      "https://68adc16da0b85b2f2cf4896e.mockapi.io/crud",{
        method:"POST",
        headers:{
            "content-Type:application/json"
        },
        body: JSON.stringify(data)

      }
    );
    const data = await response.json();
  }
);

export const userDetail = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});
