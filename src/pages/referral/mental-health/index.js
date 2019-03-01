import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import ClientDetails, { ClientValues } from "./ClientDetails";
import MedicalDetails, { MedicalValues } from "./MedicalDetails";
import Important, { ImportantValues } from "./Important";
import ReferrerDetails, { ReferrerValues } from "./ReferrerDetails";
import Additional, { AdditionalValues } from "./Additional";
import Buttons from "./Buttons";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CREATE_ELECTRONIC_SUBMISSION_MUTATION = gql`
  mutation CREATE_ELECTRONIC_SUBMISSION_MUTATION(
    $nmo_firstname: String
    $nmo_lastname: String
    $nmo_birthdate: String
    $nmo_nhi: String
    $nmo_mobilephone: String
    $nmo_address1_line1: String
    $nmo_address1_line2: String
    $nmo_address1_line3: String
    $nmo_address1_city: String
    $nmo_address1_postalcode: String # $nmo_rawdata: String
  ) {
    createElectronicSubmission(
      nmo_firstname: $nmo_firstname
      nmo_lastname: $nmo_lastname
      nmo_birthdate: $nmo_birthdate
      nmo_nhi: $nmo_nhi
      nmo_mobilephone: $nmo_mobilephone
      nmo_address1_line1: $nmo_address1_line1
      nmo_address1_line2: $nmo_address1_line2
      nmo_address1_line3: $nmo_address1_line3
      nmo_address1_city: $nmo_address1_city
      nmo_address1_postalcode: $nmo_address1_postalcode
      # nmo_rawdata: $nmo_rawdata
    )
  }
`;

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: "2rem 2rem 0 2rem" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class MentalHealth extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Mutation mutation={CREATE_ELECTRONIC_SUBMISSION_MUTATION}>
        {(createElectronicSubmission, { loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;

          return (
            <Page className={classes.root}>
              <Formik
                initialValues={{
                  ...ClientValues,
                  ...MedicalValues,
                  ...ImportantValues,
                  ...ReferrerValues,
                  ...AdditionalValues
                }}
                onSubmit={values => {
                  createElectronicSubmission({ variables: { ...values } })
                    .then(result => {
                      console.log(result);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }}
              >
                <Form>
                  <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab label="Client Details" />
                    <Tab label="Medical Details" />
                    <Tab label="Important" />
                    <Tab label="Referrer Details" />
                    <Tab label="Additional" />
                  </Tabs>

                  {value === 0 && (
                    <TabContainer>
                      <ClientDetails />
                    </TabContainer>
                  )}
                  {value === 1 && (
                    <TabContainer>
                      <MedicalDetails />
                    </TabContainer>
                  )}
                  {value === 2 && (
                    <TabContainer>
                      <Important />
                    </TabContainer>
                  )}
                  {value === 3 && (
                    <TabContainer>
                      <ReferrerDetails />
                    </TabContainer>
                  )}
                  {value === 4 && (
                    <TabContainer>
                      <Additional />
                    </TabContainer>
                  )}

                  <div style={{ padding: "2rem" }}>
                    <Buttons />
                    <p style={{ padding: "2rem" }}>
                      {JSON.stringify(this.state.values, null, 2)}
                    </p>
                  </div>
                </Form>
              </Formik>
            </Page>
          );
        }}
      </Mutation>
    );
  }
}

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MentalHealth));
