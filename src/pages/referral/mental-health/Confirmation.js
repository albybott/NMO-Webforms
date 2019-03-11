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
            Your referral has been sent. We have emailed your referral
            confirmation, and will send you an update when it has been reviewed.
          </Typography>
        </CardContent>
      </>
    );
  };

export default withStyles(styles)(Confirmation);
