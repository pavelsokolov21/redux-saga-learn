import { User } from "interfaces/user";
import { Action } from "redux";
import { DELETE_USER, FETCH_USERS, SET_USERS } from "./users.constants";

export type FetchUsersAction = Action<string>;
export const fetchUsers = (): FetchUsersAction => ({
  type: FETCH_USERS,
});

export interface SetUsersAction extends Action<string> {
  payload: User[];
}
export const setUsers = (payload: User[]): SetUsersAction => ({
  type: SET_USERS,
  payload,
});

export interface DeleteUserAction<T> extends Action<string> {
  payload: T;
}
export const deleteUser = <T>(payload: T): DeleteUserAction<T> => ({
  type: DELETE_USER,
  payload,
});
