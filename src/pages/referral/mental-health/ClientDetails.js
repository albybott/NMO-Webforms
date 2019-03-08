import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  CardHeader,
  CardContent,
  OutlinedInput
} from "@material-ui/core";
import { Field } from "formik";
import { TextField, Autocomplete, Select } from "material-ui-formik-components";

import iwi from "./data/iwi.json";
import ethnicities from "./data/ethnicities.json";

const styles = {
  root: {}
};

class ClientDetails extends React.Component {
  componentDidMount() {
    /* Initialise the Address lookup functionality add.co.nz */
    // let addyComplete = new window.AddyComplete(
    //   document.getElementById("address")
    // );
    // addyComplete.options.excludePostBox = false;
    // addyComplete.fields = {
    //   address1: document.getElementById("address"),
    //   suburb: document.getElementById("suburb"),
    //   city: document.getElementById("nmo_address1_city"),
    //   postcode: document.getElementById("nmo_address1_postalcode")
    // };
  }

  render() {
    return (
      <>
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
                name="nmo_perferredname"
                label="Preferred Name"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={4}>
              <Field
                name="nmo_nhi"
                label="NHI"
                placeholder="ABC9999"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={4}>
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

            <Grid item xs={4}>
              <Field
                style={{ zIndex: 101 }}
                id="nmo_gendercode"
                name="nmo_gendercode"
                options={[
                  { value: 1, label: "Male" },
                  { value: 2, label: "Female" }
                ]}
                component={Select}
                input={
                  <OutlinedInput
                    name="nmo_gendercode"
                    id="nmo_gendercode"
                    labelWidth={0}
                  />
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                id="nmo_address1_line1"
                name="nmo_address1_line1"
                label="Address"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                id="nmo_address1_line2"
                name="nmo_address1_line2"
                label="Suburb"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Field
                id="nmo_address1_city"
                name="nmo_address1_city"
                label="City"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                id="nmo_address1_postalcode"
                name="nmo_address1_postalcode"
                label="Postcode"
                margin="dense"
                variant="outlined"
                fullWidth
                component={TextField}
                autoComplete="off"
              />
            </Grid>

            <Grid item xs={12}>
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Field
                    style={{ zIndex: 101 }}
                    required
                    name="ethnicity"
                    label="Ethnicity"
                    options={ethnicities}
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
                name="nmo_telephone1"
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
      </>
    );
  }
}

ClientDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const ClientValues = {
  // nmo_lastname: "Tutemake",
  // nmo_firstname: "John",
  // nmo_perferredname: "JT Jackhammer",
  // nmo_nhi: "ABC9999",
  nmo_birthdate: "1980-12-28",
  nmo_gendercode: 1,
  nmo_address1_line1: "2300 Esmeralda Street",
  nmo_address1_line2: "Welcome Bay",
  nmo_address1_city: "Tauranga",
  nmo_address1_postalcode: "3112",
  nmo_telephone1: "07 5780396",
  nmo_mobilephone: "021 624587",
  // ethnicity: [{ value: "Maori", label: "Maori" }],
  // iwi: [
  //   {
  //     label: "Ngāti Kurī",
  //     value: "AF3"
  //   },
  //   {
  //     label: "Ngāpuhi",
  //     value: "AF4"
  //   }
  // ],
  mentalHealthStatus: "Good mental status",
  legalConsiderations: "Has a pending police conviction"
};

export { ClientValues };

export default withStyles(styles)(ClientDetails);
