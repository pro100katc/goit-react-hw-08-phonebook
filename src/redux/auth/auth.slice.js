import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { authInitialState } from "./auth.initialState";
import { userLogin, userLogout, userRegister } from "./auth.thunk";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder
        .addCase(userRegister.pending, handlePending)
        .addCase(userRegister.fulfilled, (state, {payload}) => {
            const {user, token} = payload;
            state.token = token;
            state.user = user;
            state.error = null
            state.isLoading = false
        })
        .addCase(userRegister.rejected, handleRejected)
        .addCase(userLogin.pending, handlePending)
        .addCase(userLogin.fulfilled, (state, {payload}) => {
            const {user, token} = payload;
            state.token = token;
            state.user = user;
            state.error = null;
            state.isLoading = false
        })
        .addCase(userLogin.rejected, handleRejected)
        .addCase(userLogout.pending, handlePending)
        .addCase(userLogout.fulfilled, state => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.error = null
        })
        .addCase(userLogout.rejected, handleRejected)
    }})


const persistConfig = {
    key: 'auth',
    storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

