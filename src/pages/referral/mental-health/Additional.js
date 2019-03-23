import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, CardHeader, CardContent } from "@material-ui/core";

import { Field } from "formik";
import { TextField } from "../../../utils/material-ui-formik-components";

const styles = theme => ({
    root: {}
  }),
  Additional = props => {
    return (
      <>
        <CardHeader
          title="Reason for Referral / Presenting Problem"
          subheader="Current situations requiring referral, events contributing
              to referral, area’s of concern and need etc"
          titleTypographyProps={{ variant: "h5" }}
          subheaderTypographyProps={{ variant: "subtitle1" }}
        />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Field
                name="reasonForReferral"
                fullWidth
                component={TextField}
                multiline
                variant="outlined"
                rows={2}
              />
            </Grid>

            <CardHeader
              title="Relevant History"
              titleTypographyProps={{ variant: "h5" }}
            />

            <Grid item xs={12}>
              <Field
                name="relevantHistory"
                fullWidth
                component={TextField}
                multiline
                variant="outlined"
                rows={2}
              />
            </Grid>

            <CardHeader
              title="Risk Issues"
              subheader="E.g. Risk to self, others, property, previous attempts on
              life, domestic violence etc"
              titleTypographyProps={{ variant: "h5" }}
              subheaderTypographyProps={{ variant: "subtitle1" }}
            />

            <Grid item xs={12}>
              <Field
                name="riskIssues"
                fullWidth
                component={TextField}
                multiline
                variant="outlined"
                rows={2}
              />
            </Grid>
          </Grid>
        </CardContent>
      </>
    );
  };

Additional.propTypes = {
  classes: PropTypes.object.isRequired
};

const AdditionalValues = {
  reasonForReferral: "Needs some help with drugs and alcohol",
  relevantHistory: "Has been to see Te Manu Toroa in the past",
  riskIssues: "He has a dendency to over eat"
};

export { AdditionalValues };

export default withStyles(styles)(Additional);
