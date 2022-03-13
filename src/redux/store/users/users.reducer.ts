import { User } from "interfaces/user";
import {
  DeleteUserAction,
  FetchUsersAction,
  SetUsersAction,
} from "./users.actions";
import { DELETE_USER, FETCH_USERS, SET_USERS } from "./users.constants";

export interface UsersState {
  users: User[];
  isLoaded: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoaded: true,
  error: null,
};

const fetchUsers = (state: UsersState): UsersState => ({
  ...state,
  isLoaded: false,
});

const setUsers = (state: UsersState, action: SetUsersAction): UsersState => ({
  ...state,
  isLoaded: true,
  users: action.payload,
});

const deleteUser = (
  state: UsersState,
  action: DeleteUserAction<string>
): UsersState => {
  const users = state.users.filter((user) => user.email !== action.payload);

  return {
    ...state,
    users,
  };
};

export const users = (
  state: UsersState = initialState,
  action: SetUsersAction | FetchUsersAction | DeleteUserAction<string>
): UsersState => {
  switch (action.type) {
    case FETCH_USERS:
      return fetchUsers(state);
    case SET_USERS:
      return setUsers(state, action as SetUsersAction);
    case DELETE_USER:
      return deleteUser(state, action as DeleteUserAction<string>);
    default:
      return state;
  }
};
