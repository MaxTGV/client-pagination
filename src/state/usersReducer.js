const initialState = {
  users: [],
  filterUsers: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  sortField: "id",
  sortType: "▲",
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_users": {
      return {
        ...state,
        users: action.users.items,
        filterUsers: action.users.items,
        totalUsersCount: action.users.totalCount,
      };
    }
    case "set_filterUsers": {
      return { ...state, filterUsers: action.filterUsers };
    }
    case "set_sortField": {
      return { ...state, sortField: action.sortField };
    }
    case "set_sortType": {
      return { ...state, sortType: action.sortType };
    }
    default:
      return state;
  }
};
