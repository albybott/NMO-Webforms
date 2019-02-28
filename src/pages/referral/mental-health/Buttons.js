import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import withRoot from "../../../utils/withRoot";

const styles = theme => ({
    button: {},
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }),
  Buttons = props => {
    return (
      <Grid item xs={12} className={props.classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={props.classes.button}
        >
          Send Referral
        </Button>
      </Grid>
    );
  };

Buttons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Buttons);
