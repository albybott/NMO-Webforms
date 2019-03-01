import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "material-ui-formik-components";

const styles = theme => ({
    card: {
      padding: "16px 32px 32px 32px"
    },
    nextOfKin: {
      padding: "0 2rem"
    }
  }),
  MedicalDetails = props => {
    return (
      <Card className={props.classes.card}>
        <CardHeader
          title="Medical Details"
          titleTypographyProps={{ variant: "h5" }}
        />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6}>
              <Field
                name="nameOfGP"
                label="Name of GP"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Field
                name="gpContactNumber"
                label="GP Contact Number"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                name="medicalIssues"
                label="Medical Issues"
                variant="outlined"
                fullWidth
                multiline
                component={TextField}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                name="otherServicesInvolved"
                label="Other services involved"
                variant="outlined"
                fullWidth
                multiline
                component={TextField}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Card className={props.classes.nextOfKin}>
                <CardHeader title="Next Of Kin" />
                <CardContent>
                  <Field
                    name="nok1Fullname"
                    label="Fullname"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok1RelationshipToClient"
                    label="Relationship to client"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok1HomeAddress"
                    label="Home Address"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok1HomePhone"
                    label="Home Phone"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok1CellPhone"
                    label="Cell Phone"
                    fullWidth
                    component={TextField}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Card className={props.classes.nextOfKin}>
                <CardHeader title="Next Of Kin" />
                <CardContent>
                  <Field
                    name="nok2Fullname"
                    label="Fullname"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok2RelationshipToClient"
                    label="Relationship to client"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok2HomeAddress"
                    label="Home Address"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok2HomePhone"
                    label="Home Phone"
                    fullWidth
                    component={TextField}
                  />
                  <Field
                    name="nok2CellPhone"
                    label="Cell Phone"
                    fullWidth
                    component={TextField}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

MedicalDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const MedicalValues = {
  nameOfGP: "Dr Who",
  gpContactNumber: "07 5794930",
  medicalIssues: "Has an alergy to nuts",
  otherServicesInvolved: "Department of social justice",
  nok1Fullname: "Harry Tutemake",
  nok1RelationshipToClient: "Brother",
  nok1HomeAddress: "2300 Jackson Street",
  nok1HomePhone: "07 5796655",
  nok1CellPhone: "027 2566565",
  nok2Fullname: "Sue Tutemake",
  nok2RelationshipToClient: "Sister",
  nok2HomeAddress: "25 Chadwick Rd",
  nok2HomePhone: "09 555223",
  nok2CellPhone: "024 556446"
};

export { MedicalValues };

export default withStyles(styles)(MedicalDetails);
