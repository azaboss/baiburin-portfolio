import React from "react";
import Pencil from "../../images/pencil.png";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { FlexContainer } from "../styledComponents";
const StyledFooter = styled.footer`
  padding: 15px 0;
  font-family: "Gilroy Light", sans-serif;
  margin-top: 170px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
  & .copyright {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & img {
      @media (max-width: 575px) {
        width: 40px;
      }
    }
    & p {
      margin: 0;

      @media (max-width: 575px) {
        font-size: 14px;
      }
    }
  }
`;

const FooterItem = styled.p`
  margin-right: 30px;
  & a {
    text-decoration: none;
    color: #c5cad0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer justifyContent="space-between" flexWrap="wrap">
        <FooterItem>
          whatsapp:<span> +7 777 560 99 66</span>
        </FooterItem>
        <FooterItem>
          Phone:<a href="tel:+77775609966"> +7 777 560 99 66</a>
        </FooterItem>
      </FlexContainer>
      <FlexContainer justifyContent="space-between" flexWrap="wrap">
        <FooterItem>
          E-mail:
          <a href="mailto:azamat.baiburin@gmail.com">
            azamat.baiburin@gmail.com
          </a>
        </FooterItem>
        <FooterItem>
          Telegram:<span> azamat</span>
        </FooterItem>
      </FlexContainer>

      <div className="copyright">
        <p>All rights reserved.</p>
        <img src={Pencil} alt="pencil logo" placeholder="blurred" />
        <p>DESIGN BY ME © 2022</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
