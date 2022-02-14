import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

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
const Slider = () => {
  const data = useStaticQuery(tabsQuery);
  const tabs = data.allContentfulPortfolio.nodes;
  return (
    <>
      {tabs.map((el) => {
        return (
          <GatsbyImage
            alt={el.title}
            key={el.id}
            image={el.image.gatsbyImageData}
          />
          // className={tab.id === activeTab + 1 ? "active" : ""}
        );
      })}
    </>
  );
};

export default Slider;
