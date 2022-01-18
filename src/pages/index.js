import * as React from "react";
import Layout from "../components/layout/Layout";
import Title from "../components/Title";
import styled from "@emotion/styled";
import Instagram from "../images/svg/inst.inline.svg";
import Vk from "../images/svg/vk.inline.svg";
import Twitter from "../images/svg/twitter.inline.svg";
import LongArrow from "../images/svg/longarrow.inline.svg";
import { colors } from "../constants/colors";
import { css } from "@emotion/css";
// markup

const Section = styled.section`
  margin-top: 100px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};

  svg:not(last-child) {
    margin-bottom: 25px;
  }
`;

const HeroText = styled.span`
  display: inline-block;
  font-family: "Gilroy", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin: 0;
  transform: rotate(-90deg);
  color: ${colors.primaryText};
`;

const Quote = styled.p`
  font-family: "Gilroy", sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: ${colors.primaryText};
  letter-spacing: 0.04em;
  text-align: ${(props) => props.align || "left"};
`;

const RelativeBlock = styled.div`
  position: relative;
  padding: ${(props) => props.padding};
`;

const HomePage = () => {
  return (
    <Layout>
      <Section>
        <Title title="UI/UX DESIGNER" withIcon={false} />
        <FlexContainer justifyContent="space-between" margin="65px 0 0">
          <RelativeBlock>
            <p
              className={css`
                position: absolute;
                top: 0;
                left: -7px;
                margin: 0;
              `}
            >
              <HeroText>links</HeroText>
            </p>

            <FlexContainer direction="column" padding={"30px 0 0 "}>
              <span
                className={css`
                  width: 1px;
                  height: 97px;
                  background-color: ${colors.primaryText};
                  margin: 20px 13px;
                `}
              />
              <Instagram />
              <Vk />
              <Twitter />
            </FlexContainer>
          </RelativeBlock>

          <FlexContainer>
            <div
              className={css`
                width: 479px;
                margin-right: 97px;
              `}
            >
              <Quote>
                “Design is not just what it looks like and feels like. Design is
                how it works.”
              </Quote>
              <Quote align="right">Steve Jobs</Quote>
            </div>
            <RelativeBlock padding={"65px 0 0 "}>
              <p
                className={css`
                  position: absolute;
                  top: 0;
                  left: -28px;
                  margin: 0;
                  width: 100px;
                `}
              >
                <HeroText>Let’s go</HeroText>
              </p>
              <LongArrow />
            </RelativeBlock>
          </FlexContainer>
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default HomePage;
