import React from "react";
import Pencil from "../../images/pencil.png";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { FlexContainer } from "../styledComponents";
const StyledFooter = styled.footer`
  padding: 15px 0;
  font-family: "Gilroy Light", sans-serif;

  & p {
    & span {
      margin-left: 30px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer justifyContent="space-between">
        <div>
          <p
            className={css`
              margin-bottom: 30px;
            `}
          >
            whatsapp:<span>+7 777 560 99 66</span>
          </p>
          <p>
            Phone::<span>+7 777 560 99 66</span>
          </p>
        </div>
        <div>
          <p
            className={css`
              margin-bottom: 30px;
            `}
          >
            E-mail:<span>azamat.baiburin@gmail.com</span>
          </p>
          <p
            className={css`
              margin-bottom: 30px;
            `}
          >
            Telegram:<span>azamat</span>
          </p>
        </div>
      </FlexContainer>
      <FlexContainer justifyContent="space-between" alignItems="flex-end">
        <p
          className={css`
            margin: 0;
          `}
        >
          All rights reserved.
        </p>
        <img src={Pencil} alt="pencil logo" placeholder="blurred" />
        <p
          className={css`
            margin: 0;
          `}
        >
          DESIGN BY ME © 2022
        </p>
      </FlexContainer>
    </StyledFooter>
  );
};

export default Footer;
