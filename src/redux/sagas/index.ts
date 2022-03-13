import { all, spawn } from "redux-saga/effects";
import { usersSaga } from "./users";

export function* rootSaga() {
  const sagas = [usersSaga];

  yield all(sagas.map((saga) => spawn(saga)));
}
