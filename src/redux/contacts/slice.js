import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from './actions';

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContacts.pending](state, action) {
      state.isLoading = true;
    },
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [getContacts.rejected](state, action) {},
  },
});

export const contactsReducer = contactsSlice.reducer;
