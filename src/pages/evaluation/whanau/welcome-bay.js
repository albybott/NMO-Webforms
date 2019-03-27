import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../../../utils/withRoot";

import HBUEvaluation from "../../../components/HBUEvaluation";

const styles = theme => ({
    root: {}
  }),
  Evaluation = props => {
    return <HBUEvaluation location="Welcome Bay" />;
  };

Evaluation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Evaluation));
