import React from "react";
import NavLink from "./NavLink";
import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

const Nav = styled.nav`
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.primaryText};
`;

const Navbar = () => {
  return (
    <header>
      <Nav>
        <NavLink path={"/"} pathname={"portfolio"} />
        <NavLink path={"/poetry"} pathname={"poetry"} />
        <NavLink path={"/drawings"} pathname={"drawings"} />
      </Nav>
    </header>
  );
};

export default Navbar;
