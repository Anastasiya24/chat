import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, post } from 'services/api';
import { EditUserOptions } from 'types/user';

export const getUserName = createAsyncThunk(
  'get_user_info',
  async (id: string | null) => {
    const res = await get(`user/info?id=${id}`);
    return res?.data?.name;
  }
);

export const editUser = createAsyncThunk(
  'edit_user_name',
  async ({ id, newName }: EditUserOptions): Promise<string> => {
    const res = await post(`user/edit-user-name?id=${id}`, { newName });
    localStorage.setItem('id', res?.data?.id);
    return res?.data?.name;
  }
);
