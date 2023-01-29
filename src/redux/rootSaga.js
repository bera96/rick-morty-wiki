import { all } from 'redux-saga/effects'
import { charactersSaga } from '../pages/Characters/store/saga'


export function* rootSaga() {
    yield all([charactersSaga()])
}