import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  // TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import { TextField, Select } from "material-ui-formik-components";

import Page from "../../../components/Page";
import withRoot from "../../../utils/withRoot";

const styles = theme => ({
    card: {
      marginBottom: 16,
      padding: 16,
      paddingBottom: 32
    }
  }),
  MentalHealth = props => {
    return (
      <Card className={props.classes.card}>
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
      </Card>
    );
  };

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MentalHealth);
