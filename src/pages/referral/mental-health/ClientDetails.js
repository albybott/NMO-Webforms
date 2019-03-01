import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import { Field } from "formik";
import { TextField, Autocomplete } from "material-ui-formik-components";

import iwi from "./iwi.json";

const styles = theme => ({
    card: {
      padding: "16px 32px 32px 32px"
    }
  }),
  ClientDetails = props => {
    return (
      <Card className={props.classes.card}>
        <CardHeader
          title="Client Details"
          titleTypographyProps={{ variant: "h5" }}
        />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="nmo_lastname"
                label="Surname"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Field
                name="nmo_firstname"
                label="First Name"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Field
                name="preferredName"
                label="Preferred Name"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={4}>
              <Field
                name="nmo_nhi"
                label="NHI"
                placeholder="ABC9999"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={6} sm={6} md={4}>
              <Field
                name="nmo_birthdate"
                label="Date Of Birth"
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} sm={8}>
              <Field
                name="address"
                label="Address"
                multiline
                rows={4}
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Field
                    name="nmo_address1_city"
                    label="City"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="nmo_address1_postalcode"
                    label="Postcode"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    component={TextField}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Field
                    style={{ zIndex: 101 }}
                    required
                    name="ethnicity"
                    label="Ethnicity"
                    options={[
                      { value: "Maori", label: "Maori" },
                      {
                        value: "Pacific Islander",
                        label: "Pacific Islander"
                      },
                      { value: "NZ European", label: "NZ European" }
                    ]}
                    component={Autocomplete}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    style={{ zIndex: 100 }}
                    required
                    name="iwi"
                    label="Iwi"
                    variant="outlined"
                    fullWidth
                    options={iwi}
                    component={Autocomplete}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Field
                name="homePhone"
                label="Home Phone"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Field
                name="nmo_mobilephone"
                label="Cell Phone"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                name="mentalHealthStatus"
                label="Mental Health Act Status"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                name="legalConsiderations"
                label="Legal considerations"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

ClientDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const ClientValues = {
  nmo_lastname: "Tutemake",
  nmo_firstname: "John",
  preferredName: "JT Jackhammer",
  nmo_nhi: "ABC9999",
  nmo_birthdate: "1980-12-28",
  address: "157 Fraser Street\nTauranga 3112",
  nmo_address1_city: "Tauranga",
  nmo_address1_postalcode: "3112",
  homePhone: "07 5780396",
  nmo_mobilephone: "021 624587",
  ethnicity: [{ value: "Maori", label: "Maori" }],
  iwi: [
    {
      label: "Ngāti Kurī",
      value: "AF3"
    },
    {
      label: "Ngāpuhi",
      value: "AF4"
    }
  ],
  mentalHealthStatus: "Good mental status",
  legalConsiderations: "Has a pending police conviction"
};

export { ClientValues };

export default withStyles(styles)(ClientDetails);
