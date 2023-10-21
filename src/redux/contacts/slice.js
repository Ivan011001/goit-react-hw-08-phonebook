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
