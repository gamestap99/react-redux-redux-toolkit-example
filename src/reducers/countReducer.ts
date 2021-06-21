import {createReducer} from "@reduxjs/toolkit";
import {initialState} from "../state/count_state";
import {increment,decrement,incrementByAmount,incrementAsync} from "../actions/countAction";

export  const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value++
        })
        .addCase(decrement, (state, action) => {
            state.value--
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload
        })
        .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value += action.payload;
        })
})
