import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux/store";
import { User } from "interfaces/user";
import { fetchUsers } from "redux/store/users/users.actions";

export const useHome = () => {
  const users = useSelector<State, User[]>((state) => state.users.users);
  const isUsersLoaded = useSelector<State, boolean>(
    (state) => state.users.isLoaded
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    users,
    isUsersLoaded,
  };
};
