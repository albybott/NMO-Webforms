import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import withRoot from "../utils/withRoot";

const styles = theme => ({
    root: {}
  }),
  Home = props => {
    return (
      <Page title="Nga Mataapuna Oranga">
        <SEO title="Home">
          <meta
            name="description"
            content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          />
        </SEO>

        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={10} style={{ minHeight: "523px" }}>
            <Card title="Web Forms" />
          </Grid>
        </Grid>
      </Page>
    );
  };

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Home));
