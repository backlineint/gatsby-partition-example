module.exports = ({ type }) => ({
  siteMetadata: {
    type: type,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `mdData`,
        path: `../../mock-data`,
      }
    },
    "gatsby-plugin-mdx",
  ]
})
