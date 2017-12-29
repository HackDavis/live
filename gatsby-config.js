module.exports = {
  siteMetadata: {
    title: `HackDavis Live 2018`,
  },
  pathPrefix: "/live",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`
  ]
}
