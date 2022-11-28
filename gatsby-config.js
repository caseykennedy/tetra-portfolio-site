const path = require('path')
const config = require('./config')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// eslint
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    banner: config.bannerUrl,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    defaultBanner: config.banner,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName,
    mailTo: config.mailTo,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'babel-plugin-styled-components',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      // options: {
      //   typeName: ({ node }) => {
      //     const name = node.sourceInstanceName
      //     if (name === `projects`) {
      //       return `Project`
      //     }
      //     return name
      //   },
      // },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
      __key: 'projects',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'team',
        path: `${__dirname}/content/team`,
      },
      __key: 'team',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          backgroundColor: 'transparent',
          placeholder: 'dominantColor',
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#78FFF2`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/favicon.svg',
        include_favicon: true,
      },
    },
  ],
}
