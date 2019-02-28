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
      <>
        <Card className={props.classes.card}>
          <CardHeader
            title="Referrer Details"
            titleTypographyProps={{ variant: "h5" }}
          />
          <CardContent>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="nameOfReferrer"
                  label="Name of referrer"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="relationshipToPerson"
                  label="Relationship to person"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerOrganisation"
                  label="Organisation"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerOrganisationAddress"
                  label="Organisation address"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerRole"
                  label="Role"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerPhone"
                  label="Phone"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerCellPhone"
                  label="Cell Phone"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerEmail"
                  label="Email"
                  fullWidth
                  component={TextField}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </>
    );
  };

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MentalHealth);
