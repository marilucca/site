module.exports = {
  siteMetadata: {
    title: `Seiva Júnior`,
    description: `Seiva Júnior Consultoria em Sustentabilidade`,
    siteUrl: `https://seivajr.com.br`,
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
    keywords: 'Sustentabilidade, Consultoria, Empresa Júnior, Meio Ambiente',
  },

  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-purgecss`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-193021520-1',
    //     head: false,
    //     enableWebVitalsTracking: true,
    //   },
    // },
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
        name: 'blog',
        path: `src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `static/images`,
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
          `gatsby-remark-relative-images`,
        ],
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-fontawesome-css`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Seiva Júnior`,
    //     short_name: `Seiva Júnior`,
    //     description: `Seiva Júnior Consultoria em Sustentabilidade`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#508f38`,
    //     display: `minimal-ui`,
    //     icon: 'src/images/logo-seiva.png',
    //   },
    // },
  ],
};
