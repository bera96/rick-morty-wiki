import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { rootSaga } from "./rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(rootSaga);

export const api = {
  url: process.env.REACT_APP_MAIN_URL,
};



export const useAppDispatch = () => useDispatch()

