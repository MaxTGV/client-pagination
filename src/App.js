import React from "react";
import { ClientPagination } from "./ClientPagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "./state/thunk";
import { getCurrentPage, getPageSize } from "./state/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const pageSize = useSelector(getPageSize);
  const currentPage = useSelector(getCurrentPage);

  useEffect(() => {
    dispatch(getImages(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  return <ClientPagination />;
};
