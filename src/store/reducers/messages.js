import { createSlice } from '@reduxjs/toolkit';
import { get, set, remove } from 'services/localStorage';

export const messages = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    loadMessagesList: (state) => {
      const list = get('messages');
      state.list = JSON.parse(list) || [];
    },

    addNewMessage: (state, action) => {
      const list = Array.from(state.list);
      list.push(action.payload);

      if (get('messages')) remove('messages');
      set('messages', JSON.stringify(list));

      state.list = list;
    },
  },
});

export const { loadMessagesList, addNewMessage } = messages.actions;

export default messages.reducer;
