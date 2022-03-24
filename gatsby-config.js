const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Seiva Júnior`,
    description: `Seiva Júnior Consultoria em Sustentabilidade`,
    siteUrl: `https://seivajr.com`,
    author: {
      name: 'Seiva Júnior',
      summary: 'Consultoria em Sustentabilidade',
    },
    social: {
      instagram: 'https://www.instagram.com/seivajr',
      facebook: 'https://www.facebook.com/seivajr',
      linkedin: 'https://www.linkedin.com/company/seivajr',
      twitter: 'https://twitter.com/seivajr',
      tiktok: 'https://www.tiktok.com/@seivajr',
    },
  },

  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss(`${__dirname}/tailwind.config.js`), autoprefixer],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.gstatic.com'],

        web: [
          {
            file: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
            name: 'Bebas Neue',
          },
          {
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap',
            name: 'Montserrat',
          },
        ],
        custom: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'membros',
        path: `${__dirname}/src/images/membros`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-embed-spotify`,
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 1.0725rem`,
          //   },
          // },
          // `gatsby-remark-prismjs`,
          // `gatsby-remark-copy-linked-files`,
          // `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-fontawesome-css`,
  ],
};
