import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';

export const loadMessagesList = createAsyncThunk('load_messages_list', async (id) => {
  const res = await get(`messages/list?id=${id}`);
  return res?.data;
});

//   addNewMessage: (state, action) => {
//     const list = Array.from(state.list);
//     list.push(action.payload);

//     if (lsGet('messages')) {
//       lsRemove('messages');
//     }
//     lsSet('messages', JSON.stringify(list));

//     state.list = list;
//   },

export const addNewMessage = createAsyncThunk(
  'add_new_message',
  async ({ id, message }) => {
    const res = await post(`messages/new-message?id=${id}`, { message });
    return res?.data;
  }
);
