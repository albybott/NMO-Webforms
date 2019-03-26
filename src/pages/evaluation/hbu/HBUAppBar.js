import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const HBUAppBar = withStyles(theme => ({
  root: {
    alignItems: "center"
  },
  colorPrimary: {
    backgroundColor: "#000"
  }
}))(props => <AppBar {...props} />);

export default props => (
  <HBUAppBar position="sticky" color="primary">
    <Toolbar>
      <Typography variant="h4" color="inherit">
        {props.title}
      </Typography>
    </Toolbar>
  </HBUAppBar>
);
