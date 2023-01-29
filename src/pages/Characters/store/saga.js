import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../../redux/store";
import { characterTypes } from "./type";
import { getCharacters, getInfo } from "./slice";
import { toast } from "react-hot-toast";

function* getCharactersHandler({ payload }) {
  try {
    const response = yield call(() =>
      axios.get(
        `${api.url}/character/?page=${
          payload.page == "" ? 1 : payload.page
        }&name=${payload.search == "" ? "" : payload.search}`
      )
    );
    yield put(getCharacters(response.data.results));
    yield put(getInfo(response.data.info));
  } catch (error) {
    console.log(error.response.data.error)
    toast.error(error.response.data.error);
  }
}

export function* charactersSaga() {
  yield all([takeEvery(characterTypes.GET_CHAR, getCharactersHandler)]);
}
