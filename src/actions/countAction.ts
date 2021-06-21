import { createAction,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchCount} from "../repositories/countApi";

export  const increment = createAction<number>('counter/increment')
export  const decrement = createAction<number>('counter/decrement')
export  const  incrementByAmount = createAction<number>('counter/incrementByAmount');


export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);