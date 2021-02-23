import { fetchImages } from "../api";
import { setImages } from "./actions";

export const getImages = (page, limit) => {
  return (dispatch) => {
    fetchImages(page, limit).then((images) => dispatch(setImages(images)));
  };
};
