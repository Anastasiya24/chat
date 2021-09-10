import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { lsSet } from 'services/localStorage';
import { get, post } from 'services/api';

export const getUserName = createAsyncThunk('get_user_info', async (id) => {
  const res = await get(`user/info?id=${id}`);
  return res?.data;
});

export const editUser = createAsyncThunk('edit_user_name', async ({ id, newName }) => {
  const res = await post(`user/edit-user-name?id=${id}`, { newName });
  return res?.data;
});

const initialState = {
  name: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserName.fulfilled]: (state, action) => {
      lsSet('id', action.payload?.id);
      state.name = action.payload?.name;
    },

    [editUser.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default user.reducer;
