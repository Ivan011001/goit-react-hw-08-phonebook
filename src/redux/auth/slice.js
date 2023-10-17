import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  isLogged: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
