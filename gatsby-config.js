module.exports = {
  siteMetadata: {
    title: `Seiva Júnior`,
    description: `Seiva Júnior Consultoria em Sustentabilidade`,
    siteUrl: `https://seivajr.com`,
    // social: {
    // },
  },

  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],

        web: [
          {
            file: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
            name: "Bebas Neue",
          },
          {
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap',
            name: 'Montserrat',
          }
        ],
        custom: [],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

  ]
};
