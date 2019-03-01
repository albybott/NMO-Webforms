import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Header = props => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid container justify="flex-end" spacing={16}>
          <Grid item>
            <Hidden smDown>
              <Typography
                style={{ color: "#efefef", flex: 1 }}
                component="span"
                variant="caption"
              >
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
