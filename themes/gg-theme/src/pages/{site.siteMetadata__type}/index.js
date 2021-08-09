import React from "react";
import { graphql } from "gatsby";

import Card from "../../components/card";

const IndexPage = ({ data }) => {
  console.log(data);
  const type = data.site.siteMetadata.type;
  const formattedType =  type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div class="bg-blue-100 h-screen">
      <h1 class="py-10 text-center text-5xl font-bold">{ formattedType }</h1>
      { data.allSitePage.edges.map(node => (
        <Card id={node.node.id} path={node.node.path} title={node.node.fields.title} />
      ))}
    </div>
  )
}

export const IndexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        type
      }
    }
    allSitePage(filter: {context: {type: {ne: null}}}) {
      edges {
        node {
          id
          path
          fields {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;