import styled from "@emotion/styled";
import React from "react";
import Icon from "../../atoms/Icon/Icon";

interface Props {
  placeholder: string;
}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #e9e8ed;
  border-radius: 8px;
  padding: 8px 16px;
  img,
  svg {
    margin-right: 10px;
  }
  input {
    border: none;
    &:focus-visible {
      outline: none;
    }
  }
`;

const SearchBar: React.FC<Props> = ({ placeholder }) => {
  return (
    <Root>
      <Icon name="search" />
      <input placeholder={placeholder} />
    </Root>
  );
};

export default SearchBar;
