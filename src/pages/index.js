import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Collapse from "@kunukn/react-collapse";
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
  QuoteBlock,
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
import { gsap } from "gsap";
import Seo from "../Seo";
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
  };

  const image = tabs[activeTab];
  const slug = slugify(image.title, { lower: true });
  const heroRef = useRef();

  useEffect(() => {
    gsap.to(heroRef.current, { opacity: 1, y: 50 });
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      {/*HERO SECTION*/}
      <Section ref={heroRef} style={{ opacity: 0 }}>
        <Title title="UI/UX DESIGNER" withIcon={false} />
        <FlexContainer justifyContent="space-between" margin="65px 0 0">
          <RelativeBlock>
            <div className="links">
              <p
                className={css`
                  margin: 0 5px;
                  writing-mode: vertical-lr;
                  text-orientation: inherit;
                  transform: rotate(180deg);
                `}
              >
                <HeroText>links</HeroText>
              </p>

              <FlexContainer direction="column">
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
            </div>
          </RelativeBlock>

          <QuoteBlock>
            <div className="quote">
              <Quote>
                “Design is not just what it looks like and feels like. Design is
                how it works.”
              </Quote>
              <Quote align="right">Steve Jobs</Quote>
            </div>
            <FlexContainer
              alignItems="center"
              direction="column"
              padding={"65px 0 0 "}
            >
              <p
                className={css`
                  margin: 0;
                  writing-mode: vertical-lr;
                  text-orientation: inherit;
                  margin-bottom: 10px;
                  transform: rotate(180deg);
                `}
              >
                <HeroText>Let’s go</HeroText>
              </p>
              <LongArrow />
            </FlexContainer>
          </QuoteBlock>
        </FlexContainer>
      </Section>
      {/*  END HERO*/}

      {/*PHOTO SECTION*/}
      <Section>
        <RelativeBlock>
          <div className="about">
            <StaticImage
              src="../images/profile.jpg"
              alt="Azamat Baiburin"
              placeholder="blurred"
              layout="constrained"
              className="about-img"
            />
            <p className="about-text">
              Hi, I am Azamat, UX/UI Designer from Kazakhstan. Adept of
              minimalism, accuracy, cleanliness and lightness.
            </p>
            <div className="specialize-block">
              <div className="bg-text">
                <p>UX/UI</p>
                <p>DEVELOPMENT</p>
                <p>Analytics</p>
              </div>
              <div>
                <span
                  className={css`
                    font-family: "Gilroy Light", sans-serif;
                    font-size: 14px;
                  `}
                >
                  I specialize
                </span>
              </div>
              <List
                list={[
                  "Huge SAAS services",
                  "CRM systems",
                  " Dashboards",
                  "E-commerce",
                  "Websites",
                  "Mobile applications",
                  "Logo and branding",
                ]}
              />
            </div>
          </div>
        </RelativeBlock>
      </Section>
      {/*/!*  END PHOTO*!/*/}

      {/*  ABOUT SECTION*/}
      <Section>
        <div className="about">
          <Title title="ABOUT ME" />
          <FlexContainer justifyContent="flex-end">
            <SectionText>
              UI/UX дизайнер с опытом работы разработчиком и IT аналитиком.
              Небольшие знания Java, JS, CSS, HTML и прочего дают мне
              возможность проектировать дизайн, наиболее продуктивный и
              жизнеспособный как для пользователей так и для разработчиков.
              Хорошо рисую от руки и имею аналитический склад ума. Считаю, что
              дизайн это не красивая картинка, а решение задачи клиента в первую
              очередь. Хороший дизайн должен быть простым, понятным и легким.
              Адепт минимализма во всем. Бакалавр ВТиПО Казахстансокго
              университета и Postgraduate certificate по Advanced Computing with
              Management Лондонсокго университета (топ 30 мира) King's College
              London. Владею английским языком на уровне IELTS 6.5+ (сертификат
              получал еще до обучения в Лондоне, так что возможно уже выше).
              Имею сертификат из Michigan University по Qualitative
              Interviewing. Люблю как творчество, так и технологии, логику,
              аналитику. Поэтому и решил развиваться именно в UX/UI дизайне.
              Сильно мотивирован развиваться и мечтаю в будущем разрабатывать
              дизайн, который повлияет на весь Мир.
            </SectionText>
          </FlexContainer>
          <p
            className={css`
              font-family: "Gilroy Light", sans-serif;

              font-size: 24px;
              line-height: 29px;
            `}
          >
            Дизайн – это не только о создании продуктов, но и о создании
            будущего, в котором вы хотите жить.
          </p>
          <FlexContainer
            justifyContent="space-between"
            margin={"100px 0 0 "}
            flexWrap="wrap"
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
            <Link
              to="/about"
              className={css`
                font-family: "Gilroy Light", sans-serif;
                font-size: 18px;
                line-height: 22px;
                color: #6191ef;
                text-decoration: none;
                cursor: pointer;
                margin-top: 50px;
              `}
            >
              More about me ->
            </Link>
          </FlexContainer>
        </div>
      </Section>
      {/*  END ABOUT SECTION*/}

      {/*  PROJECTS*/}
      <Section>
        <Title title="SOME OF my" withIcon={false} />
        <Title title="projects" margin="0 0 0 60px" />
        <FlexContainer justifyContent="flex-end">
          <SectionText>
            Я специализируюсь на разработке сложных интерфейсов мобильных и веб
            приложений, дэшбордов, систем управления и п.р. Но при желании
            справлюсь и с сайтами, лендингами а иногда даже логотипами и
            визуалами.
          </SectionText>
        </FlexContainer>
        <div className="projects">
          <FlexContainer justifyContent="space-between" style={{ gap: 25 }}>
            <div className="image-block">
              <GatsbyImage
                alt={image.title}
                image={image.image.gatsbyImageData}
                className={css`
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                `}
              />

              <div className="mask">
                <Link to={`/${slug}`}>visit project</Link>
              </div>
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
                  className={i === activeTab ? "selected" : ""}
                >
                  <div className={i === activeTab ? "active" : ""}>
                    <ArrowRight />
                    {tab.title}
                  </div>
                </Tab>
              ))}
            </div>
          </FlexContainer>
        </div>
        <div className="mobile-projects">
          {tabs.map((tab, i) => (
            <div key={tab.id}>
              <Tab
                onClick={() => handleClick(i)}
                className={i === activeTab ? "selected" : ""}
              >
                <div className={i === activeTab ? "active" : ""}>
                  <ArrowRight />
                  {tab.title}
                </div>
              </Tab>
              <Collapse isOpen={i === activeTab}>
                <div className="inner-info">
                  <p className="descr">
                    collapsed contentqw eqw e qwe wqe wq eqw ewq e qwe wqe wqe
                    wqe wqe wq eqe qe wq e
                  </p>
                  <div className="inner-info__img">
                    <GatsbyImage
                      alt={image.title}
                      image={tab.image.gatsbyImageData}
                      className={css`
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                      `}
                    />
                  </div>
                  <p className="link">
                    <Link to={`/${slug}`}>Read more</Link>
                  </p>
                </div>
              </Collapse>
            </div>
          ))}
        </div>
        <FlexContainer justifyContent="flex-end">
          <MoreLink href="https://behance.net/baiburin_1" target="_blank">
            More projects ->
          </MoreLink>
        </FlexContainer>
      </Section>

      {/*  END PROJECTS*/}

      <Section>
        <Title className="services" title="SERVICES" margin="0 0 0 100px" />
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
        <div>
          <FlexContainer
            justifyContent="space-between"
            margin="25px 0 0"
            flexWrap="wrap"
            className="services"
          >
            <ServicesType>brifing</ServicesType>
            <ServicesType>UX/Analytics</ServicesType>
            <ServicesType>Design Concept</ServicesType>
            <ServicesType>Design all pages</ServicesType>
            <ServicesType>responsiveness</ServicesType>
            <ServicesType>development</ServicesType>
          </FlexContainer>
        </div>
      </Section>
    </Layout>
  );
};

export default HomePage;
