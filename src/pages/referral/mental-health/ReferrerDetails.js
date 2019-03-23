import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, CardHeader, CardContent } from "@material-ui/core";

import { Field } from "formik";
import { TextField } from "../../../utils/material-ui-formik-components";

const styles = theme => ({
    root: {}
  }),
  ReferrerDetails = props => {
    return (
      <>
        <>
          <CardHeader
            title="Referrer Details"
            titleTypographyProps={{ variant: "h5" }}
          />
          <CardContent>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="nmo_contactname"
                  label="Name of referrer"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="relationshipToPerson"
                  label="Relationship to person"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerOrganisation"
                  label="Organisation"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerOrganisationAddress"
                  label="Organisation address"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerRole"
                  label="Role"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="nmo_contactphone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="referrerCellPhone"
                  label="Cell Phone"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  name="nmo_contactemail"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
              </Grid>
            </Grid>
          </CardContent>
        </>
      </>
    );
  };

ReferrerDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const ReferrerValues = {
  nmo_contactname: "Dwayne Johnson",
  relationshipToPerson: "None",
  referrerOrganisation: "Te Manu Toroa",
  referrerOrganisationAddress: "21 Tebbs Lane",
  referrerRole: "Case Worker",
  nmo_contactphone: "07 588798",
  referrerCellPhone: "021 578656",
  nmo_contactemail: "d.johnson@temanutoroa.org.nz"
};

export { ReferrerValues };

export default withStyles(styles)(ReferrerDetails);
