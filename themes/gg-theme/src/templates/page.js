import React from "react"
import { graphql } from "gatsby"

export default function Page({ data }) {
  return(
    <div class="bg-blue-100 h-screen">
      <h1 class="pt-10 pb-2 text-center text-3xl font-bold">{data.mdx.frontmatter.title}</h1>
      <p class="text-center">Type: {data.mdx.frontmatter.type}</p>
      <p class="py-10 text-center">{data.mdx.excerpt}</p>
    </div>
  );
}

export const query = graphql`
  query PageQuery($slug: String) {
    mdx(slug: {eq: $slug}) {
      frontmatter {
        title
        type
      }
      excerpt
    }
  }
`