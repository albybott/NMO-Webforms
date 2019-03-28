import React from "react";
import withRoot from "../../../utils/withRoot";
import HBUEvaluation from "../../../components/HBUEvaluation";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => {};
const Evaluation = props => <HBUEvaluation location="Greerton" />;

export default withRoot(withStyles(styles)(Evaluation));
