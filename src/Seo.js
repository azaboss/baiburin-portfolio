import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Seo = ({ description, title }) => {
  const { site } = useStaticQuery(query);
  console.log(site);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <Helmet
      title={`${title} | ${site.siteMetadata.description}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

export default Seo;
