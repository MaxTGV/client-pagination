import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { sortValues } from "./shared/sortValues";
import { setFilterImages, setSortField, setSortType } from "./state/actions";
import {
  getPageSize,
  getTotalImagesCount,
  getSortType,
  getSortField,
  getFilterImages,
} from "./state/selectors";
import { getImages } from "./state/thunk";
import { TableSearch } from "./TableSearch";

const StyledClientPagination = styled.div`
  width: 100%;

  & li {
    padding: 5px;
    cursor: pointer;
    border: 1px solid transparent;
  }

  .pagination {
    display: flex;
    justify-content: space-around;
    padding: 30px 10px;
  }

  .active {
    font-weight: bold;
    border: 1px solid #6c7ae0;
    border-radius: 5px;
  }
`;

export const ClientPagination = () => {
  const dispatch = useDispatch();
  const filterImages = useSelector(getFilterImages);
  const pageSize = useSelector(getPageSize);
  const totalImagesCount = useSelector(getTotalImagesCount);
  const sortField = useSelector(getSortField);
  const sortType = useSelector(getSortType);
  const totalPages = Math.ceil(totalImagesCount / pageSize);

  const handlePageClick = ({ selected }) => {
    dispatch(getImages(selected + 1));
    dispatch(setSortField("id"));
    dispatch(setSortType("▲"));
  };

  const onSort = (e) => {
    const id = e.target.id;
    console.log(id);
    dispatch(setSortType(sortType === "▲" ? "▼" : "▲"));
    dispatch(setSortField(id));
    sortValues(id, filterImages, sortType);
  };

  const searchValue = (updateImages) => {
    dispatch(setFilterImages(updateImages));
  };

  return (
    <StyledClientPagination>
      <TableSearch searchValue={searchValue} />
      <table>
        <thead>
          <tr onClick={(e) => onSort(e)}>
            <th id="id">ID {sortField === "id" ? sortType : null}</th>
            <th id="title">Title {sortField === "title" ? sortType : null}</th>
            <th id="creator">
              Creator {sortField === "creator" ? sortType : null}
            </th>
            <th id="source">
              Source {sortField === "source" ? sortType : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {filterImages &&
            filterImages.map((image) => (
              <tr key={image.id}>
                <td>{image.id}</td>
                <td>{image.title}</td>
                <td>{image.creator}</td>
                <td>{image.source}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </StyledClientPagination>
  );
};
