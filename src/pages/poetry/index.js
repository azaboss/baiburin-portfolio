import React from "react";
import Layout from "../../components/layout/Layout";

// const qwe = graphql`
//   {
//     allContentfulPortfolio {
//     nodes {
//       title
//       id
//       image {
//         gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 200)
//       }
//     }
//   }
// `;
const Poetry = () => {
  // const data = useStaticQuery(qwe);
  // const nodes = data.allContentfulPortfolio.nodes;

  return (
    <Layout>
      <div>poetry page</div>
      {/*{nodes.map((el) => {*/}
      {/*  return (*/}
      {/*    <GatsbyImage*/}
      {/*      alt={el.title}*/}
      {/*      key={el.id}*/}
      {/*      image={el.image.gatsbyImageData}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
      {/*<Slider />*/}
    </Layout>
  );
};

export default Poetry;
