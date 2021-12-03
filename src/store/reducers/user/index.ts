import { createSlice, CreateSliceOptions, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from 'types/user';
import { getUserName, editUser } from './service';

const initialState = {
  name: '',
};

const options: CreateSliceOptions = {
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserName.fulfilled.type]: (state: UserType, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    [editUser.fulfilled.type]: (state: UserType, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
};

export const user = createSlice(options);

export default user.reducer;
