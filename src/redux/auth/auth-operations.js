import { createAsyncThunk } from '@reduxjs/toolkit';
import authapi from 'services/auth-api';

export const addUser = createAsyncThunk('auth/addUser',
    async (credentials, { rejectWithValue }) => {
        try {
        return await authapi.addUser(credentials);
        } catch (error) {
            return rejectWithValue(error.massege);
        }
    }
);

export const loginUser = createAsyncThunk('auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
        return await authapi.loginUser(credentials);
        } catch (error) {
            return rejectWithValue(error.massege);
        }
    }
);

export const logOutUser = createAsyncThunk('auth/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
        return await authapi.logOutUser();
        } catch (error) {
            return rejectWithValue(error.massege);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser',
    async (_, {rejectWithValue, getState}) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();;
    }

    authapi.token.set(persistedToken);
        try {
        return await authapi.fetchCurrentUser();
        } catch (error) {
            return rejectWithValue(error.massege);
        }
    }
);