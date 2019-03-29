import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography, CardHeader, CardContent } from "@material-ui/core";

const styles = theme => ({
    root: {}
  }),
  Confirmation = props => {
    return (
      <>
        <CardHeader title="Nga Mihi" titleTypographyProps={{ variant: "h4" }} />

        <CardContent>
          <Typography variant="subtitle1">{props.children}</Typography>
        </CardContent>
      </>
    );
  };

export default withStyles(styles)(Confirmation);
