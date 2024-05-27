import { configureStore } from '@reduxjs/toolkit';
import addAccountSlice from './Slicers.js/addAccountSlice';

const store = configureStore({
    reducer: {
        registerReducer: addAccountSlice,
    },
});

export default store;
