import { all } from "redux-saga/effects";
import { charactersSaga } from "../pages/Characters/store/saga";
import { episodeSaga } from "../pages/Episodes/store/saga";

export function* rootSaga() {
  yield all([charactersSaga(), episodeSaga()]);
}
