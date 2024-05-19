import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './CustomerSlice';

const store = configureStore({
    devTools:true,
    reducer: {
        customers:customerReducer
    }
});

export default store;