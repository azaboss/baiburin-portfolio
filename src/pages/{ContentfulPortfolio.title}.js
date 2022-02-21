import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import { colors } from "../constants/colors";
import { FlexContainer, SectionText } from "../components/styledComponents";
import Arrow from "../images/svg/arrow.inline.svg";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { css } from "@emotion/css";

const ProjectTitle = styled.h2`
  font-family: "Gilroy Light", sans-serif;
  font-size: 96px;
  color: ${colors.primaryText};
  max-width: 750px;
  width: 100%;
`;

const ProjectTemplate = ({ data }) => {
  const {
    image,
    title,
    projects: {
      content: { description, project_img },
    },
  } = data.contentfulPortfolio;
  const pathImage = getImage(image.gatsbyImageData);
  return (
    <Layout>
      <ProjectTitle>{title}</ProjectTitle>
      <FlexContainer justifyContent="flex-end">
        <div
          className={css`
            margin-bottom: 80px;
          `}
        >
          <Arrow />
          <h3>Задача</h3>
          <SectionText>
            Мобильное приложение для управления рабочими процессами внутри
            компании.
          </SectionText>
        </div>
      </FlexContainer>
      <div>
        <GatsbyImage
          alt={title}
          image={pathImage}
          className={css`
            width: 600px;
            height: 600px;
            object-fit: contain;
          `}
        />
      </div>
      <div
        className={css`
          margin: 100px 0;
          & p {
            font-family: "Gilroy Light", sans-serif;
            margin: 0;
            font-size: 24px;
            line-height: 29px;
            color: ${colors.primaryText};
          }
        `}
      >
        <p>{description}</p>
      </div>
      <div
        className={css`
          max-width: 1200px;
          height: 648px;
          width: 100%;
          overflow: hidden;
          & img {
            max-width: 100%;
            height: auto;
            object-fit: contain;
          }
        `}
      >
        <img src={project_img} alt="test" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getSingleProject($title: String) {
    contentfulPortfolio(title: { eq: $title }) {
      projects {
        content {
          description
          project_img
        }
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
      title
    }
  }
`;

export default ProjectTemplate;
