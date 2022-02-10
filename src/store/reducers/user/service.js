import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';

export const getUserName = createAsyncThunk('get_user_info', async (id) => {
  const res = await get(`user/info?id=${id}`);
  return res?.data;
});

export const editUser = createAsyncThunk('edit_user_name', async ({ id, newName }) => {
  const res = await post(`user/edit-user-name?id=${id}`, { newName });
  localStorage.setItem('id', res?.data?.id);
  return res?.data;
});
