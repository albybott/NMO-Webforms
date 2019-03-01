module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "NMO",
        // This is the field under which it's accessible
        fieldName: "nmo",
        // URL to query from
        url: "http://localhost:4444/"
      }
    }
  ]
};
