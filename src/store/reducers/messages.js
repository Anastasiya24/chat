import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';

export const loadMessagesList = createAsyncThunk('load_messages_list', async (id) => {
  const res = await get(`messages/list?id=${id}`);
  return res?.data;
});

export const addNewMessage = createAsyncThunk(
  'add_new_message',
  async ({ id, message }) => {
    const res = await post(`messages/new-message?id=${id}`, { message });
    return res?.data;
  }
);

const initialState = {
  list: [],
};

export const messages = createSlice({
  name: 'messages',
  initialState,
  extraReducers: {
    [loadMessagesList.fulfilled]: (state, action) => {
      state.list = action.payload;
    },

    [addNewMessage.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    // reducers: {
    //   loadMessagesList: (state) => {
    //     const list = lsGet('messages');
    //     state.list = JSON.parse(list) || [];
    //   },

    //   addNewMessage: (state, action) => {
    //     const list = Array.from(state.list);
    //     list.push(action.payload);

    //     if (lsGet('messages')) {
    //       lsRemove('messages');
    //     }
    //     lsSet('messages', JSON.stringify(list));

    //     state.list = list;
    //   },
  },
});

export default messages.reducer;
