module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        // TODO - Make type configurable.
        path: `../../mock-data/articles`,
      }
    },
  ]
}
