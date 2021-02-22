import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUsersCount } from "./state/selectors";

const StyledTableSearch = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: inherit;

  input {
    width: 85%;
    padding: 11px;
    border: 1px solid #6c7ae0;
  }

  label {
    padding: 10px;
    margin-left: 10px;
    margin-right: -1px;
    border: 1px solid #6c7ae0;
    font-size: 16px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  label:hover {
    background-color: #6c7ae0;
    color: white;
  }
`;

export const TableSearch = ({ searchValue }) => {
  const users = useSelector(getUsersCount);

  const onChange = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      searchValue(users);
    }
    const updateUsers = users.filter(
      (user) => user.name.toLowerCase().indexOf(value) > -1
    );
    searchValue(updateUsers);
  };

  return (
    <StyledTableSearch>
      <label htmlFor="search">Search</label>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        id="search"
        name="search"
      />
    </StyledTableSearch>
  );
};
