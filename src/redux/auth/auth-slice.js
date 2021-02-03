import { createSlice } from '@reduxjs/toolkit';
import { addUser, loginUser, logOutUser, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [addUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }, 
          [loginUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        }, 
        [logOutUser.fulfilled](state, _) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
     [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
         state.isLoggedIn = true;
         state.isFetchingCurrentUser = false;
        },
     [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
    },
})


export default authSlice.reducer;