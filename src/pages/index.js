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
import Profile from "../images/profile.jpg";
import { StaticImage } from "gatsby-plugin-image";
import List from "../components/List";
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

const BlockTitle = styled.h3`
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
`;

const WorkBlock = styled.div`
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

const MoreLink = styled.a`
  font-family: "Gilroy Light", sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: #6191ef;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
`;

const HomePage = () => {
  return (
    <Layout>
      {/*HERO SECTION*/}
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
      {/*  END HERO*/}

      {/*PHOTO SECTION*/}
      <Section>
        <RelativeBlock>
          <FlexContainer>
            <StaticImage
              src="../images/profile.jpg"
              alt="Azamat Baiburin"
              placeholder="blurred"
              layout="constrained"
              className={css`
                max-width: 426px;
              `}
            />
            <FlexContainer margin="0 0 0 174px">
              <div
                className={css`
                  margin-right: 60px;
                `}
              >
                <span
                  className={css`
                    font-family: "Gilroy Light", sans-serif;
                    font-size: 14px;
                  `}
                >
                  I specialize
                </span>
                <BlockTitle>UX|UI</BlockTitle>
              </div>
              <List
                list={[
                  "Huge SAAS services, CRM systems, Dashboards etc",
                  "E-commerce",
                  "Websites",
                  "Mobile applications",
                  "Logo and branding",
                ]}
              />
            </FlexContainer>
          </FlexContainer>
          <p
            className={css`
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
            `}
          >
            Hi, I am Azamat, UX/UI Designer from Kazakhstan. Adept of
            minimalism, accuracy, cleanliness and lightness.
          </p>
        </RelativeBlock>
      </Section>
      {/*  END PHOTO*/}
      {/*  ABOUT SECTION*/}
      <Section>
        <Title title="ABOUT ME" />
        <FlexContainer justifyContent="flex-end">
          <p
            className={css`
              width: 600px;
              font-family: "Gilroy Light", sans-serif;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.04em;
            `}
          >
            UI/UX дизайнер с опытом работы разработчиком и IT аналитиком.
            Небольшие знания Java, JS, CSS, HTML и прочего дают мне возможность
            проектировать дизайн, наиболее продуктивный и жизнеспособный как для
            пользователей так и для разработчиков. Хорошо рисую от руки и имею
            аналитический склад ума. Считаю, что дизайн это не красивая
            картинка, а решение задачи клиента в первую очередь. Хороший дизайн
            должен быть простым, понятным и легким. Адепт минимализма во всем.
            Бакалавр ВТиПО Казахстансокго университета и Postgraduate
            certificate по Advanced Computing with Management Лондонсокго
            университета (топ 30 мира) King's College London. Владею английским
            языком на уровне IELTS 6.5+ (сертификат получал еще до обучения в
            Лондоне, так что возможно уже выше). Имею сертификат из Michigan
            University по Qualitative Interviewing. Люблю как творчество, так и
            технологии, логику, аналитику. Поэтому и решил развиваться именно в
            UX/UI дизайне. Сильно мотивирован развиваться и мечтаю в будущем
            разрабатывать дизайн, который повлияет на весь Мир.
          </p>
        </FlexContainer>
        <p
          className={css`
            font-family: "Gilroy Light";

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
            <h3>I WORK</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
          <WorkBlock>
            <h3>I WORK</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
          <WorkBlock>
            <h3>I WORK</h3>
            <p>
              I'm a 24 y/o UX/UI Designer based in Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
          </WorkBlock>
        </FlexContainer>
        <FlexContainer justifyContent="flex-end">
          <MoreLink>More about me -></MoreLink>
        </FlexContainer>
      </Section>
    </Layout>
  );
};

export default HomePage;
