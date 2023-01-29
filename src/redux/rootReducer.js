import { combineReducers } from "@reduxjs/toolkit";
import characterSlice  from "../pages/Characters/store/slice";
import episodeSlice from "../pages/Episodes/store/slice"

export const rootReducer = combineReducers({ characterSlice, episodeSlice });

