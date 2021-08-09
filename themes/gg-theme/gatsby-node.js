const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }, options) => {
  const { createNodeField } = actions
  if (node.context?.type === options.type) {
    createNodeField({
      node,
      name: `title`,
      value: node.context.title,
    })
  }
}

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: {frontmatter: {type: {eq: "${options.type}"}}}) {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${options.type}/${node.slug}`,
      component: require.resolve(`./src/templates/page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        type: options.type,
        title: node.frontmatter.title,
      },
    })
  })
}