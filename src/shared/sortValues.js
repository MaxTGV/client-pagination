export const sortValues = (id, images, sortType) => {
  if (sortType === "▲") {
    return images.sort((prev, next) => {
      if (prev[id] > next[id]) return -1;
      if (prev[id] > next[id]) return 1;
      return 0;
    });
  }
  return images.sort((prev, next) => {
    if (prev[id] < next[id]) return -1;
    if (prev[id] < next[id]) return 1;
    return 0;
  });
};
