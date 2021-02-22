export const setUsers = (users) => ({
  type: "set_users",
  users,
});

export const setFilterUsers = (filterUsers) => ({
  type: "set_filterUsers",
  filterUsers,
});

export const setSortField = (sortField) => ({
  type: "set_sortField",
  sortField,
});

export const setSortType = (sortType) => ({
  type: "set_sortType",
  sortType,
});
