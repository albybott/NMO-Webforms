import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

import Page from "../../../components/Page";
import withRoot from "../../../utils/withRoot";

const styles = theme => ({
    card: {
      marginBottom: 16
    },
    nextOfKin: {
      padding: "0 16px"
    },
    button: {
      marginTop: theme.spacing.unit * 3,
      marginLeft: theme.spacing.unit
    },
    buttons: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }),
  MentalHealth = props => {
    return (
      <Page>
        <form
          onSubmit={e => {
            alert("Boom");
            e.preventDefault();
          }}
        >
          {/* Client Details */}
          <Card className={props.classes.card}>
            <CardHeader
              title="Client Details"
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    name="surname"
                    label="Surname"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    name="firstnames"
                    label="First Name/s"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    name="preferredName"
                    label="Preferred Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <TextField
                    name="nhi"
                    label="NHI"
                    placeholder="ABC9999"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={4}>
                  <TextField
                    name="dateOfBirth"
                    label="Date Of Birth"
                    type="date"
                    InputLabelProps={{
                      shrink: true
                    }}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item />

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="address"
                    label="Address"
                    multiline
                    rows={4}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Grid container item xs={12}>
                    <Grid item xs={12}>
                      <TextField
                        name="homePhone"
                        label="Home Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="cellPhone"
                        label="Cell Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="ethnicity"
                    label="Ethnicity"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="iwi"
                    label="Iwi"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="mentalHealthStatus"
                    label="Mental Health Act Status"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="legalConsiderations"
                    label="Legal considerations"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Medical Details */}
          <Card className={props.classes.card}>
            <CardHeader
              title="Medical Details"
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="nameOfGP"
                    label="Name of GP"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="gpContactNumber"
                    label="GP Contact Number"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="medicalIssues"
                    label="Medical Issues"
                    variant="outlined"
                    fullWidth
                    rows={2}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="otherServicesInvolved"
                    label="Other services involved"
                    variant="outlined"
                    fullWidth
                    rows={2}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader title="Next Of Kin" />
                    <CardContent className={props.classes.nextOfKin}>
                      <TextField
                        name="nok1Fullname"
                        label="Fullname"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok1RelationshipToClient"
                        label="Relationship to client"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok1HomeAddress"
                        label="Home Address"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok1HomePhone"
                        label="Home Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok1CellPhone"
                        label="Cell Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader title="Next Of Kin" />
                    <CardContent className={props.classes.nextOfKin}>
                      <TextField
                        name="nok2Fullname"
                        label="Fullname"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok2RelationshipToClient"
                        label="Relationship to client"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok2HomeAddress"
                        label="Home Address"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok2HomePhone"
                        label="Home Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                      <TextField
                        name="nok2CellPhone"
                        label="Cell Phone"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Important */}
          <Card className={props.classes.card}>
            <CardHeader
              title="Important"
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox name="clientConsent" />}
                        label="Has the person you are referring given consent to release information?"
                      />
                      <FormControlLabel
                        control={<Checkbox name="clientRequestingService" />}
                        label="Are they requesting the service?"
                      />
                      <FormControlLabel
                        control={<Checkbox name="parentalConsent" />}
                        label="If the person you are referring is under 16 years of age, have you gained parental consent?"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Referer Details */}
          <Card className={props.classes.card}>
            <CardHeader
              title="Referrer Details"
              titleTypographyProps={{ variant: "h4" }}
            />
            <CardContent>
              <Grid container spacing={16}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="nameOfReferrer"
                    label="Name of referrer"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="relationshipToPerson"
                    label="Relationship to person"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerOrganisation"
                    label="Organisation"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerOrganisationAddress"
                    label="Organisation address"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerRole"
                    label="Role"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerPhone"
                    label="Phone"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerCellPhone"
                    label="Cell Phone"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    name="referrerEmail"
                    label="Email"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Referer Details */}
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
                  <TextField
                    name="reasonForReferral"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>

                <CardHeader
                  title="Relevant History"
                  titleTypographyProps={{ variant: "h5" }}
                />

                <Grid item xs={12}>
                  <TextField
                    name="relevantHistory"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    multiline
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
                  <TextField
                    name="riskIssues"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    multiline
                    rows={2}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Grid item xs={12} className={props.classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              // onClick={this.handleNext}
              className={props.classes.button}
            >
              Send Referral
            </Button>
          </Grid>
        </form>
      </Page>
    );
  };

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MentalHealth));
