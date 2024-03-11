import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(user) {
        return {
          payload: {
            ...user,
            id: Date.now(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(user => user.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
