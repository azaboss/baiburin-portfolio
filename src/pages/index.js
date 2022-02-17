import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout/Layout";
import Title from "../components/Title";
import Instagram from "../images/svg/inst.inline.svg";
import Vk from "../images/svg/vk.inline.svg";
import Twitter from "../images/svg/twitter.inline.svg";
import LongArrow from "../images/svg/longarrow.inline.svg";
import { colors } from "../constants/colors";
import { css } from "@emotion/css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ArrowRight from "../images/svg/arrow_right.inline.svg";
import List from "../components/List";
import slugify from "slugify";
import {
  BlockTitle,
  FlexContainer,
  HeroText,
  MoreLink,
  Quote,
  RelativeBlock,
  Section,
  SectionText,
  ServicesItem,
  ServicesType,
  Tab,
  WorkBlock,
} from "../components/styledComponents";
import { graphql, useStaticQuery } from "gatsby";
import Link from "gatsby-link";
// markup
const tabsQuery = graphql`
  {
    allContentfulPortfolio {
      nodes {
        title
        id
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const HomePage = () => {
  const data = useStaticQuery(tabsQuery);
  const tabs = data.allContentfulPortfolio.nodes;
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
    console.log(index, activeTab);
  };

  const image = tabs[activeTab];
  const slug = slugify(image.title, { lower: true });
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
          <SectionText>
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
          </SectionText>
        </FlexContainer>
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
      {/*  END ABOUT SECTION*/}

      {/*  PROJECTS*/}
      <Section>
        <Title title="SOME OF my" withIcon={false} />
        <Title title="projects" margin="0 0 0 100px" />
        <FlexContainer justifyContent="flex-end">
          <SectionText>
            Я специализируюсь на разработке сложных интерфейсов мобильных и веб
            приложений, дэшбордов, систем управления и п.р. Но при желании
            справлюсь и с сайтами, лендингами а иногда даже логотипами и
            визуалами.
          </SectionText>
        </FlexContainer>
        <FlexContainer style={{ justifyContent: "space-between" }}>
          <div
            className={css`
              width: 550px;
              height: 600px;
              position: relative;
            `}
          >
            <Link to={`/${slug}`}>
              <GatsbyImage
                alt={image.title}
                image={image.image.gatsbyImageData}
                className={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />
            </Link>
          </div>

          <div
            className={css`
              width: 600px;
            `}
          >
            {tabs.map((tab, i) => (
              <Tab
                key={tab.id}
                onClick={() => handleClick(i)}
                className={css`
                  background: ${i === activeTab
                    ? "rgba(255, 255, 255, 0.08)"
                    : "none"};
                `}
              >
                <div className={i === activeTab ? "active" : ""}>
                  <ArrowRight />
                  {tab.title}
                </div>
              </Tab>
            ))}
            <FlexContainer justifyContent="flex-end">
              <MoreLink>More projects -></MoreLink>
            </FlexContainer>
          </div>
        </FlexContainer>
      </Section>
      {/*  END PROJECTS*/}
      <Section>
        <Title title="SERVICES" margin="0 0 0 100px" />
        <div>
          <ServicesItem>
            <span>01</span>
            <p>websites</p>
          </ServicesItem>
          <ServicesItem>
            <span>02</span>
            <p>E-commerce</p>
          </ServicesItem>
          <ServicesItem>
            <span>03</span>
            <p>Mobile apps</p>
          </ServicesItem>
          <ServicesItem>
            <span>04</span>
            <p>Logo and branding</p>
          </ServicesItem>
        </div>
        <FlexContainer justifyContent="space-between" margin="25px 0 0">
          <ServicesType>brifing</ServicesType>
          <ServicesType>UX/Analytics</ServicesType>
          <ServicesType>Design Concept</ServicesType>
          <ServicesType>Design all pages</ServicesType>
          <ServicesType>responsiveness</ServicesType>
          <ServicesType>development</ServicesType>
        </FlexContainer>
      </Section>
      <Section>
        <Title title="My sKILLS" />
      </Section>
    </Layout>
  );
};

export default HomePage;
