import { createSlice } from '@reduxjs/toolkit';
import { loadMessagesList, addNewMessage } from './service';

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
      const list = Array.from(state.list);
      list.push(action.payload);
      state.list = list;
    },
  },
});

export default messages.reducer;
