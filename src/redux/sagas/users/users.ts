import { call, put, takeEvery } from "redux-saga/effects";
import dayjs from "dayjs";
import { User } from "interfaces/user";
import { FETCH_USERS } from "redux/store/users/users.constants";
import { setUsers } from "redux/store/users/users.actions";

function* fetchUsers() {
  const response: Response = yield call(
    fetch,
    "https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users"
  );
  const users: User[] = yield call([response, response.json]);

  yield put(
    setUsers(
      users.map((user) => ({
        ...user,
        registration_date: dayjs(user.registration_date).format("DD.MM.YYYY"),
      }))
    )
  );
}

export function* usersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
