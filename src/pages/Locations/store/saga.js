import { getLocations, getInfo } from "./slice";
import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../../redux/store";
import { locationTypes } from "./type";
import { toast } from "react-hot-toast";

function* getLocationsHandler({ payload }) {
  try {
    const response = yield call(() =>
      axios.get(
        `${api.url}/location/?page=${
          payload.page === "" ? 1 : payload.page
        }&name=${payload.search === "" ? "" : payload.search}`
      )
    );
    yield put(getLocations(response.data.results));
    yield put(getInfo(response.data.info))
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* locationsSaga() {
  yield all([takeEvery(locationTypes.GET_LOCATION, getLocationsHandler)]);
}
