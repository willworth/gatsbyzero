module.exports = {
    siteMetadata: {
      title: 'Worth Coding',
      author: 'Will Worth',
      description: 'A coding blog.',
      siteUrl: 'https://github.com/willworth/',
    },


    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/pages`,
            name: 'pages',
          },
        }],

}