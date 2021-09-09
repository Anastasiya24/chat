import { createSlice } from '@reduxjs/toolkit';
import { get, set, remove } from 'services/localStorage';

//     id: 1,
//     text: 'Hi!',
//     time: '14:11',

export const messages = createSlice({
  name: 'messages',
  initialState: {
    list: [],
  },
  reducers: {
    // TODO
    loadMessagesList: (state) => {
      const list = get('messages') || [];
      // console.log('list: ', list);
      // console.log('JSON', JSON.parse(list));
      state.list = list;
    },
    addNewMessage: (state, action) => {
      const list = Array.from(state.list);
      list.push(action.payload);

      if (get('messages')) remove('messages');
      set('messages', list);

      state.list = list;
    },
  },
});

export const { loadMessagesList, addNewMessage } = messages.actions;

export default messages.reducer;
