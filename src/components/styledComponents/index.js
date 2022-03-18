import styled from "@emotion/styled";
import { colors } from "../../constants/colors";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  width: ${(props) => (props.width ? props.width : "auto")};
  svg:not(last-child) {
    margin-bottom: 25px;
  }
`;
export const Section = styled.section`
  margin-top: 100px;
`;

export const HeroText = styled.span`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0;
  color: ${colors.primaryText};
`;

export const Quote = styled.p`
  margin: 0 0 10px;
  font-family: "Gilroy", sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: ${colors.primaryText};
  letter-spacing: 0.04em;
  text-align: ${(props) => props.align || "left"};

  @media (max-width: 575px) {
    font-size: 16px;
  }
`;

export const RelativeBlock = styled.div`
  position: relative;
  padding: ${(props) => props.padding};

  & .links {
    @media (max-width: 650px) {
      display: none;
    }
  }

  & .about {
    display: flex;

    & .specialize-block {
      margin-left: 108px;
      position: relative;
      z-index: 3;

      & .bg-text {
        position: absolute;
        width: 100%;
        height: 100%;

        & p {
          font-family: "Gilroy Light", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 48px;
          line-height: 59px;
          margin: 24px 0 0;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #272829;

          @media (max-width: 455px) {
            font-size: 32px;
            line-height: 39px;
            margin: 44px 0 0;
          }
        }
      }

      & div {
        margin-bottom: 15px;
      }

      @media (max-width: 922px) {
        margin-left: 0;
      }
    }

    & .about-text {
      font-family: "Gilroy Light", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 36px;
      line-height: 43px;
      text-align: center;
      letter-spacing: 0.08em;
      color: ${colors.primaryText};
      position: absolute;
      bottom: 0;
      left: 122px;
      max-width: 850px;

      @media (max-width: 922px) {
        position: static;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 30px;
      }
    }

    & .about-img {
      max-width: 426px;
      @media (max-width: 922px) {
        max-width: 100%;
      }
    }

    @media (max-width: 925px) {
      display: block;
    }
  }
`;

export const QuoteBlock = styled.div`
  display: flex;
  flex-wrap: wrap;

  & .quote {
    width: 479px;
    margin-right: 97px;

    @media (max-width: 650px) {
      width: 100%;
      padding-left: 60px;
      margin-right: 0;
    }

    @media (max-width: 380px) {
      padding-left: 0;
    }
  }

  @media (max-width: 650px) {
    justify-content: center;
  }
`;

export const BlockTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
`;

export const WorkBlock = styled.div`
  font-family: "Gilroy Light", sans-serif;
  h3 {
    margin: 10px 0 0 100px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const MoreLink = styled.a`
  font-family: "Gilroy Light", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: #6191ef;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
`;

export const SectionText = styled.p`
  width: 600px;
  font-family: "Gilroy Light", sans-serif;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.04em;
`;

export const Tab = styled.div`
  padding: 25px;
  border-bottom: 1px solid #56595e;

  font-family: "Gilroy Light", sans-serif;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &:first-of-type {
    border-top: 1px solid #56595e;
  }

  & div.active {
    transform: translateX(20px);

    svg {
      transform: translateX(0);
    }
  }

  & div {
    display: flex;
    position: relative;
    transition: all 0.2s linear;
    overflow: hidden;
    & svg {
      transition: all 0.1s linear;
      margin-bottom: 0;
      margin-right: 15px;
      transform: translateX(-25px);
    }
  }
`;

export const ServicesItem = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: "Gilroy Light", sans-serif;
  border-bottom: 1px solid #c5cad0;

  overflow: hidden;
  & span {
    min-width: 165px;
    font-weight: 600;
    font-size: 144px;
    line-height: 176px;
    text-transform: uppercase;
    margin-right: 96px;
    transform: translateY(35%);
  }
  & p {
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    letter-spacing: 0.2em;
    text-transform: uppercase;

    color: #c5cad0;
    margin: 0;
    padding-bottom: 26px;
  }
`;

export const ServicesType = styled.div`
  padding: 10px;
  color: #c5cad0;
  border: 1px solid #c5cad0;
  border-radius: 4px;
  font-family: "Gilroy Light", sans-serif;

  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
