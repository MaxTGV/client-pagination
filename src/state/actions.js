export const setImages = (images) => ({
  type: "set_images",
  images,
});

export const setFilterImages = (filterImages) => ({
  type: "set_filterImages",
  filterImages,
});

export const setSortField = (sortField) => ({
  type: "set_sortField",
  sortField,
});

export const setSortType = (sortType) => ({
  type: "set_sortType",
  sortType,
});
