import { createAsyncThunk } from '@reduxjs/toolkit';
import { userPrivateAPI, token } from 'http/http';


export const fetchContacts = createAsyncThunk('fetchAll', 
    async (_, {getState, rejectWithValue}) => {
        const stateToken = getState().user.token;
        token.set(stateToken)
    try {
        const {data} = await userPrivateAPI.get('/contacts')
        return data
    } catch (error) {return rejectWithValue(error.message)}
})

export const addContact = createAsyncThunk('addContact', 
    async (contact, thunkAPI) => {
    try {
        const {data} = await userPrivateAPI.post(`/contacts/`, contact)
        return data
    } catch (error) {return thunkAPI.rejectWithValue(error.message)}
})

export const deleteContact = createAsyncThunk(
    'deleteContact', 
    async (id, thunkAPI) => {
    try {
        const {data} = await userPrivateAPI.delete(`/contacts/${id}`)
        return data
    } catch (error) {return thunkAPI.rejectWithValue(error.message)}
})
