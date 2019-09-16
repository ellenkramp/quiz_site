module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pacifico`,
          },
          {
            family: `Comfortaa`,
          },
        ],
      },
    }
  ]
}
