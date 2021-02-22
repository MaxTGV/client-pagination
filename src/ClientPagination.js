import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { sortValues } from "./shared/sortValues";
import { setFilterUsers, setSortField, setSortType } from "./state/actions";
import {
  getPageSize,
  getTotalUsersCount,
  getSortType,
  getSortField,
  getFilterUsers,
} from "./state/selectors";
import { getUsers } from "./state/thunk";
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
  const filterUsers = useSelector(getFilterUsers);
  const pageSize = useSelector(getPageSize);
  const totalUsersCount = useSelector(getTotalUsersCount);
  const sortField = useSelector(getSortField);
  const sortType = useSelector(getSortType);
  const totalPages = Math.ceil(totalUsersCount / pageSize);

  const handlePageClick = ({ selected }) => {
    dispatch(getUsers(selected + 1));
    dispatch(setSortField("id"));
    dispatch(setSortType("▲"));
  };

  const onSort = (e) => {
    const id = e.target.id;
    dispatch(setSortType(sortType === "▲" ? "▼" : "▲"));
    dispatch(setSortField(id));
    sortValues(id, filterUsers, sortType);
  };

  const searchValue = (updateUsers) => {
    dispatch(setFilterUsers(updateUsers));
  };

  return (
    <StyledClientPagination>
      <TableSearch searchValue={searchValue} />
      <table>
        <thead>
          <tr onClick={(e) => onSort(e)}>
            <th id="id">ID {sortField === "id" ? sortType : null}</th>
            <th id="name">Name {sortField === "name" ? sortType : null}</th>
            <th id="uniqueUrlName">
              URL Name {sortField === "uniqueUrlName" ? sortType : null}
            </th>
            <th id="photos">
              Photos {sortField === "photos" ? sortType : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {filterUsers &&
            filterUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.uniqueUrlName ? user.uniqueUrlName : "Нет"}</td>
                <td>{user.photos.small ? user.photos.small : "Нет"}</td>
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
