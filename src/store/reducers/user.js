import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    name: '',
    // id: null
  },
  reducers: {
    loadUser: (state) => {
      state.name = localStorage.getItem('userName') || '';
    },
    editUser: (state, action) => {
      const name = action.payload;
      if (localStorage.getItem('userName')) localStorage.removeItem('userName');
      localStorage.setItem('userName', name);

      state.name = name;
    },
  },
});

export const { loadUser, editUser } = user.actions;

export default user.reducer;
