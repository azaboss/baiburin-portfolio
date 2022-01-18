import React from "react";
import Arrow from "../../images/svg/arrow.inline.svg";
import styled from "@emotion/styled";
const StyledTitle = styled.h2`
  font-family: Eh_cyr, sans-serif;
  font-size: 96px;
  margin: 0;
`;

const Title = ({ title, withIcon = true }) => {
  return (
    <StyledTitle>
      {title} {withIcon ? <Arrow /> : null}
    </StyledTitle>
  );
};

export default Title;
