import React from "react";
import Layout from "../components/layout/Layout";
import Title from "../components/Title";
import styled from "@emotion/styled";
import {
  FlexContainer,
  Section,
  SectionText,
  WorkBlock,
} from "../components/styledComponents";
import { colors } from "../constants/colors";
import { css } from "@emotion/css";

const AboutBlock = styled.div`
  font-family: "Gilroy Light", sans-serif;
  color: ${colors.primaryText};
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }

  border-bottom: 1px solid #56595e;

  & h2 {
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    margin: 0;
  }
`;

const About = () => {
  return (
    <Layout>
      <Section>
        <Title title="More About Me" />
      </Section>
      <Section>
        <AboutBlock>
          <FlexContainer justifyContent="space-between">
            <h2>1995</h2>
            <SectionText>
              Родился в прошлом веке, в холодной стране, в самом сердце Евразии.
              Казахстан - ВКО - Урджар.
            </SectionText>
          </FlexContainer>
        </AboutBlock>
        <AboutBlock>
          <FlexContainer justifyContent="space-between">
            <h2>2013</h2>
            <SectionText>
              С детства проявляя интерес к точным наукам и технологиям, закончил
              одну из престижнейших школ страны имени Первого Президента РК -
              Назарбаев Интеллектуальную Школу.
            </SectionText>
          </FlexContainer>
        </AboutBlock>
        <AboutBlock>
          <FlexContainer justifyContent="space-between">
            <h2>2013-2017</h2>
            <SectionText>
              Увлекался веб, мобильной и декстопной разработкой, пробовал для
              себя многие языки программирования. Закончил Университет по
              специальности Вычислительная техника и Программное обеспечение.
            </SectionText>
          </FlexContainer>
        </AboutBlock>
        <p
          className={css`
            font-family: "Gilroy Light", sans-serif;

            font-size: 24px;
            line-height: 29px;
          `}
        >
          Дизайн – это не только о создании продуктов, но и о создании будущего,
          в котором вы хотите жить.
        </p>
        <FlexContainer
          justifyContent="space-between"
          margin={"100px 0 0 "}
          className={css`
            gap: 74px;
          `}
        >
          <WorkBlock>
            <h3>Я работаю</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
          <WorkBlock>
            <h3>Я планирую</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
          <WorkBlock>
            <h3>Я мечтаю</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default About;
