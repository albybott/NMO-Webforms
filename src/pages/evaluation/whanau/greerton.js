import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../../utils/withRoot";

import HBUEvaluation from '../hbu'

const styles = theme => ({
  root: {}
}),
  Evaluation = props => {
    return (
      <HBUEvaluation location="Greerton" />
    );
  };

Evaluation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Evaluation));
