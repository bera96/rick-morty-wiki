import { combineReducers } from "@reduxjs/toolkit";
import characterSlice from "../pages/Characters/store/slice";
import episodesSlice from "../pages/Episodes/store/slice";

export const rootReducer = combineReducers({ characterSlice, episodesSlice });
