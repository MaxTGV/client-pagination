export const fetchUsers = (page, limit = 50) => {
  return fetch(
    `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${limit}`
  ).then((res) => res.json());
};
