import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';

export const loadMessagesList = createAsyncThunk('load_messages_list', async (id) => {
  const res = await get(`messages/list?id=${id}`);
  return res?.data;
});

export const addNewMessage = createAsyncThunk('add_new_message', async ({ message }) => {
  const res = await post(`messages/new-message`, { message });
  return res?.data;
});
