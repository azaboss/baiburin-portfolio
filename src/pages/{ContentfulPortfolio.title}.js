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

  @media (max-width: 768px) {
    font-size: 75px;
  }

  @media (max-width: 575px) {
    font-size: 35px;
  }
`;

const Project = styled.div`
  & .task {
    margin-bottom: 80px;

    & .task-text {
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    & svg {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  & .task-block {
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }

  & .project-img {
    width: 600px;
    height: 600px;
    object-fit: contain;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }
  }

  & .project-descr {
    margin: 100px 0;
    @media (max-width: 575px) {
      margin: 50px 0;
    }
    & p {
      font-family: "Gilroy Light", sans-serif;
      margin: 0;
      font-size: 24px;
      line-height: 29px;
      color: ${colors.primaryText};

      @media (max-width: 575px) {
        font-size: 16px;
      }
    }
  }

  & .project-secondary-img {
    max-width: 1200px;
    height: 648px;
    width: 100%;
    overflow: hidden;
    & img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }

    @media (max-width: 575px) {
      height: 300px;
    }
  }
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
      <Project>
        <ProjectTitle>{title}</ProjectTitle>
        <FlexContainer className="task-block" justifyContent="flex-end">
          <div className="task">
            <Arrow />
            <h3>Задача</h3>
            <SectionText className="task-text">
              Мобильное приложение для управления рабочими процессами внутри
              компании.
            </SectionText>
          </div>
        </FlexContainer>
        <div>
          <GatsbyImage
            alt={title}
            image={pathImage}
            className={"project-img"}
          />
        </div>
        <div className={"project-descr"}>
          <p>{description}</p>
        </div>
        <div className="project-secondary-img">
          <img src={project_img} alt="test" />
        </div>
      </Project>
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
