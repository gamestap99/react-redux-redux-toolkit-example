import {combineReducers} from "@reduxjs/toolkit";
import {counterReducer} from "./countReducer";


export const rootReducer = combineReducers(
    {
        countReducer: counterReducer,
    }
);