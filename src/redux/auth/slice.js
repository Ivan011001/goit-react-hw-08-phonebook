import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLogged: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, action) {},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [register.rejected](state, action) {},

    [logIn.pending](state, action) {},
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logIn.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
