import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
});

export const contactsReducer = contactsSlice.reducer;
