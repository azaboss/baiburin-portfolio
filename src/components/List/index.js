import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

const InnerList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const ListITem = styled.li`
  font-family: "Gilroy Light", sans-serif;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.primaryText};
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const List = ({ list = [] }) => {
  return (
    <InnerList>
      {list.map((item, i) => (
        <ListITem key={i}>{item}</ListITem>
      ))}
    </InnerList>
  );
};

export default List;
