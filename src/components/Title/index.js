import React from "react";
import Arrow from "../../images/svg/arrow.inline.svg";
import styled from "@emotion/styled";
const StyledTitle = styled.h2`
  font-family: Eh_cyr, sans-serif;
  font-size: 96px;
  margin: ${(props) => (props.margin ? props.margin : 0)};

  &.services {
    @media (max-width: 575px) {
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) and (min-width: 575px) {
    font-size: 70px;

    & svg {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 575px) {
    font-size: 35px;

    & svg {
      width: 25px;
      height: 25px;
    }
  }
`;

const Title = ({ title, withIcon = true, margin = 0, ...props }) => {
  return (
    <StyledTitle margin={margin} {...props}>
      {title} {withIcon ? <Arrow /> : null}
    </StyledTitle>
  );
};

export default Title;
