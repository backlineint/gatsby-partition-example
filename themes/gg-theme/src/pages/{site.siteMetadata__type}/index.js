import React from "react";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => {
  console.log(data);
  const type = data.site.siteMetadata.type;
  const formattedType =  type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <>
      <h1>{ formattedType }</h1>
      { data.allSitePage.edges.map(node => (
        <h3 key={node.node.id}><Link to={node.node.path}>{node.node.fields.title}</Link></h3>
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