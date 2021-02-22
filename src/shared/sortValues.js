export const sortValues = (id, users, sortType) => {
  switch (id) {
    case "id": {
      if (sortType === "▲") {
        return users.sort((prev, next) => prev.id - next.id);
      }
      return users.sort((prev, next) => next.id - prev.id);
    }
    case "name":
    case "uniqueUrlName":
    case "photos": {
      if (sortType === "▲") {
        return users.sort((prev, next) => {
          if (prev.name > next.name) return -1;
          if (prev.name > next.name) return 1;
          return 0;
        });
      }
      return users.sort((prev, next) => {
        if (prev.name < next.name) return -1;
        if (prev.name < next.name) return 1;
        return 0;
      });
    }
    default:
      return null;
  }
};
