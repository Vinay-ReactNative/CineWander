import { createSlice } from '@reduxjs/toolkit';

const addAccountSlice = createSlice({
    name: 'RegisteredAccountData',
    initialState: {
        user: '',
        password: '',
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
    },
})

export const { setUser } = addAccountSlice.actions;

