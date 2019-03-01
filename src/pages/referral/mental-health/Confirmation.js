import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Typography, CardHeader, CardContent } from "@material-ui/core";

const styles = theme => ({
    root: {}
  }),
  Confirmation = props => {
    return (
      <>
        <CardHeader title="Nga Mihi" titleTypographyProps={{ variant: "h5" }} />
        <CardContent>
          <Typography variant="subtitle1">
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </CardContent>
      </>
    );
  };

export default withStyles(styles)(Confirmation);
