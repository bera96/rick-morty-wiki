import { getEpisodes, getEpisode, getInfo } from "./slice";
import { call, put, all, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { api } from "../../../redux/store";
import { episodesTypes } from "./type";
import { toast } from "react-hot-toast";

function* getEpisodesHandler({ payload }) {
  try {
    const response = yield call(() =>
      axios.get(
        `${api.url}/episode/?page=${
          payload.page === "" ? 1 : payload.page
        }&name=${payload.search === "" ? "" : payload.search}`
      )
    );
    yield put(getEpisodes(response.data.results));
    yield put(getInfo(response.data.info));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}
function* getEpisodeHandler({ payload }) {
  try {
    const response = yield call(() =>
      axios.get(`${api.url}/episode/${payload.id}`)
    );
    yield put(getEpisode(response.data));
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* episodesSaga() {
  yield all([
    takeEvery(episodesTypes.GET_EPISODES, getEpisodesHandler),
    takeEvery(episodesTypes.GET_EPISODE, getEpisodeHandler),
  ]);
}
