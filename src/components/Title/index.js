import React from "react";
import Arrow from "../../images/svg/arrow.inline.svg";
import styled from "@emotion/styled";
const StyledTitle = styled.h2`
  font-family: Eh_cyr, sans-serif;
  font-size: 96px;
  margin: ${props=>props.margin ? props.margin : 0};
`;

const Title = ({ title, withIcon = true,margin= 0 }) => {
  return (
    <StyledTitle margin={margin}>
      {title} {withIcon ? <Arrow /> : null}
    </StyledTitle>
  );
};

export default Title;
