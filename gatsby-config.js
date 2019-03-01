module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "Gatsby Material UI Business Starter",
    contact: {
      phone: "503-555-1111",
      email: "hi@foxandgeese.com"
    },
    menuLinks: [
      {
        name: "Mental Health",
        link: "/referral/mental-health"
      }
    ]
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    }
  ]
};
