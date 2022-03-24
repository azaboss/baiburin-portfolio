import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/css";
import { colors } from "../../constants/colors";

const activeStyles = {
  color: "#6191EF",
};

const NavLink = ({ path, pathname }) => {
  return (
    <Link
      to={path}
      activeStyle={activeStyles}
      className={css`
        font-family: "Gilroy Light", sans-serif;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: ${colors.primaryText};
        text-decoration: none;
        margin-right: 50px;
        transition: color 0.2s linear;
        &:hover {
          color: #6191ef;
        }

        &:last-child {
          margin-right: 0;
        }

        @media (max-width: 575px) {
          margin-right: 20px;
        }
      `}
    >
      {pathname}
    </Link>
  );
};

export default NavLink;
