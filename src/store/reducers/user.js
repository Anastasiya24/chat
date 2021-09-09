import { createSlice } from '@reduxjs/toolkit';
import { get, set, remove } from 'services/localStorage';

export const user = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    loadUser: (state) => {
      state.name = get('userName') || '';
    },
    editUser: (state, action) => {
      const name = action.payload;
      if (get('userName')) remove('userName');
      set('userName', name);

      state.name = name;
    },
  },
});

export const { loadUser, editUser } = user.actions;

export default user.reducer;
