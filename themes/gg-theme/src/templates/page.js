import React from "react"
import { graphql } from "gatsby"

export default function Page({ data }) {
  return(
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Type: {data.mdx.frontmatter.type}</p>
      <p>{data.mdx.excerpt}</p>
    </>
  );
}

export const query = graphql`
  query PageQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        type
      }
      excerpt
    }
  }
`