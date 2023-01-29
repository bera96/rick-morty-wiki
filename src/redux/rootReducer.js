import { combineReducers } from "@reduxjs/toolkit";
import characterSlice  from "../pages/Characters/store/slice";

export const rootReducer = combineReducers({ characterSlice });

