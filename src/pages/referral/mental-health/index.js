import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Button,
  Paper,
  Avatar,
  Typography
} from "@material-ui/core";

import { Account } from "mdi-material-ui";

// import Card from "../../../components/Card";
import Page from "../../../components/Page";
import withRoot from "../../../utils/withRoot";

const styles = theme => ({
    root: {
      backgroundColor: "orange"
    },
    nextOfKin: {
      paddingTop: 0,
      paddingRight: 24,
      paddingLeft: 24,
      paddingBottom: 16
    }
  }),
  MentalHealth = props => {
    return (
      <Page title="Mental Health">
        <Paper>
          <form
            onSubmit={e => {
              alert("Boom");
            }}
          >
            {/* Client */}
            <Card>
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
                      margin="dense"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <TextField
                      name="firstnames"
                      label="First Name/s"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <TextField
                      name="preferredName"
                      label="Preferred Name"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6} sm={6} md={4}>
                    <TextField
                      name="nhi"
                      label="NHI"
                      placeholder="ABC9999"
                      variant="outlined"
                      margin="dense"
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
                      margin="dense"
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
                      margin="dense"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      name="iwi"
                      label="Iwi"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="mentalHealthStatus"
                      label="Mental Health Act Status"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="legalConsiderations"
                      label="Legal considerations"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Medical */}
            <Card>
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
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      name="gpContactNumber"
                      label="GP Contact Number"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="medicalIssues"
                      label="Medical Issues"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      rows={2}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="otherServicesInvolved"
                      label="Other services involved"
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      rows={2}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <Card className={props.classes.nextOfKin}>
                      <CardHeader title="Next Of Kin" />
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
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={12} md={6}>
                    <Card className={props.classes.nextOfKin}>
                      <CardHeader title="Next Of Kin" />
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
                    </Card>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        </Paper>
      </Page>
    );
  };

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MentalHealth));
