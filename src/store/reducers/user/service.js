import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';
import { lsSet } from 'services/localStorage';

export const getUserName = createAsyncThunk('get_user_info', async (id) => {
  const res = await get(`user/info?id=${id}`);
  lsSet('id', res?.data?.id);
  return res?.data;
});

export const editUser = createAsyncThunk('edit_user_name', async ({ id, newName }) => {
  const res = await post(`user/edit-user-name?id=${id}`, { newName });
  return res?.data;
});
