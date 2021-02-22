import { fetchUsers } from "../api";
import { setUsers } from "./actions";

export const getUsers = (page, limit) => {
  return (dispatch) => {
    fetchUsers(page, limit).then((users) =>
      dispatch(setUsers(users))
    );
  };
};
