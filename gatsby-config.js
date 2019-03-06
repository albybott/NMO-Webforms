module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "Nga Mataapuna Oranga",
    contact: {
      phone: "07 5794930",
      email: "alby@nmo.org.nz"
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
