import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { Button, Grid } from "@material-ui/core";

const MenuPage = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button style={{ color: "#000000de" }}>{link.name}</Button>
        </Link>
      ))}
    </Grid>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuPageQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuPage data={data} />}
  />
);
