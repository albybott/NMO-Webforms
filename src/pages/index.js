import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import withRoot from "../utils/withRoot";
import MenuPage from "../components/MenuPage";

const styles = theme => ({
    root: {}
  }),
  Home = props => {
    return (
      <Page>
        <SEO title="Home">
          <meta name="description" content="Nga Mataapuna Oranga - Web forms" />
        </SEO>

        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={10} style={{ minHeight: "523px" }}>
            <Card title="Available forms">
              <MenuPage />
            </Card>
          </Grid>
        </Grid>
      </Page>
    );
  };

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Home));
