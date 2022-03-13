import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "redux/sagas";
import { users, UsersState } from "./users/users.reducer";

export interface State {
  users: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    users,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
