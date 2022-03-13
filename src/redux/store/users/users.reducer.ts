import { User } from "interfaces/user";
import { FetchUsersAction, SetUsersAction } from "./users.actions";
import { FETCH_USERS, SET_USERS } from "./users.constants";

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

export const users = (
  state: UsersState = initialState,
  action: SetUsersAction | FetchUsersAction
): UsersState => {
  switch (action.type) {
    case FETCH_USERS:
      return fetchUsers(state);
    case SET_USERS:
      return setUsers(state, action as SetUsersAction);
    default:
      return state;
  }
};
