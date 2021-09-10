import { createSlice } from '@reduxjs/toolkit';
import { getUserName, editUser } from './service';

const initialState = {
  name: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUserName.fulfilled]: (state, action) => {
      state.name = action.payload?.name;
    },

    [editUser.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default user.reducer;
