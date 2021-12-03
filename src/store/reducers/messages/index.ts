import { createSlice, CreateSliceOptions, PayloadAction } from '@reduxjs/toolkit';
import { MessagesStateType, MessageType } from 'types/messages';
import { loadMessagesList, addNewMessage } from './service';

const initialState = {
  list: [],
};

const options: CreateSliceOptions = {
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: {
    [loadMessagesList.fulfilled.type]: (
      state: MessagesStateType,
      action: PayloadAction<MessageType[]>
    ) => {
      state.list = action.payload;
    },

    [addNewMessage.fulfilled.type]: (
      state: MessagesStateType,
      action: PayloadAction<MessageType>
    ) => {
      const list = Array.from(state.list);
      list.push(action.payload);
      state.list = list;
    },
  },
};

export const messages = createSlice(options);

export default messages.reducer;
