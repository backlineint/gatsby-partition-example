import React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <h1>{ data.site.siteMetadata.type }</h1>
      { data.allSitePage.edges.map(node => (
        <h3 key={node.node.id}>{node.node.fields.title}</h3>
      ))}
    </>
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
          fields {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;