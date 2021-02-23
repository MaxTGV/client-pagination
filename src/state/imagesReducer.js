const initialState = {
  images: [],
  filterImages: [],
  pageSize: 50,
  totalImagesCount: 0,
  currentPage: 1,
  sortField: "id",
  sortType: "▲",
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_images": {
      return {
        ...state,
        images: action.images.results,
        filterImages: action.images.results,
        totalImagesCount: action.images.result_count,
      };
    }
    case "set_filterImages": {
      return { ...state, filterImages: action.filterImages };
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
