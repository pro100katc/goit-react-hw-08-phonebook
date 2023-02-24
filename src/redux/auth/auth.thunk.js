import { createAsyncThunk } from '@reduxjs/toolkit';
import { userPrivateAPI, userPublicAPI, token } from 'http/http';


export const userRegister = createAsyncThunk('register',
    async (user, thunkAPI) => {
        try {
            const {data} = await userPublicAPI.post('/users/signup', user)
            token.set(data.token)
            return data
        } catch (error) {
            alert(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogin = createAsyncThunk('login',
    async (user, thunkAPI) => {
        try {
            const {data} = await userPublicAPI.post('/users/login', user)
            token.set(data.token)
            return data
        } catch (error) {
            alert(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogout = createAsyncThunk('logout',
    async (_, {getState, rejectWithValue}) => {
        const stateToken = getState().user.token;
        token.set(stateToken)

        try {
            await userPrivateAPI.post('/users/logout')
        } catch (error) {
            alert(error.message)
            return rejectWithValue(error.message)
        }
    }
)

export const userInfo = createAsyncThunk('info',
    async (_, thunkAPI) => {
        try {
            const {data} = await userPrivateAPI.get('/users/current')
            return data
        } catch (error) {
            alert(error.message)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)