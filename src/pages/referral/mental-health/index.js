import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, Typography, Button, Hidden } from "@material-ui/core";
import { Formik, Form } from "formik";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import ClientDetails, { ClientValues } from "./ClientDetails";
import MedicalDetails, { MedicalValues } from "./MedicalDetails";
import Important, { ImportantValues } from "./Important";
import ReferrerDetails, { ReferrerValues } from "./ReferrerDetails";
import Additional, { AdditionalValues } from "./Additional";
import Confirmation from "./Confirmation";

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
  },
  card: {
    marginBottom: 16,
    padding: 16,
    paddingBottom: 32
  },
  button: {},
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem 1rem 0 0"
  },
  stepper: {
    marginBottom: "1rem"
  }
});

const steps = ["Client", "Medical", "Important", "Referrer", "Additional"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ClientDetails />;
    case 1:
      return <MedicalDetails />;
    case 2:
      return <Important />;
    case 3:
      return <ReferrerDetails />;
    case 4:
      return <Additional />;
    default:
      throw new Error("Unknown step");
  }
}

class MentalHealth extends React.Component {
  state = {
    value: 0,
    activeStep: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <Mutation mutation={CREATE_ELECTRONIC_SUBMISSION_MUTATION}>
        {(createElectronicSubmission, { loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;

          return (
            <Page className={classes.root} showHeader={false}>
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
                  <Card className={classes.card}>
                    <Stepper
                      activeStep={activeStep}
                      className={classes.stepper}
                    >
                      {steps.map(label => (
                        <Step key={label}>
                          <StepLabel>
                            <Hidden smDown>{label}</Hidden>
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                      <>
                        <Confirmation />
                      </>
                    ) : (
                      <>
                        {getStepContent(activeStep)}
                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button
                              onClick={this.handleBack}
                              className={classes.button}
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleNext}
                            className={classes.button}
                          >
                            {activeStep === steps.length - 1
                              ? "Send Referral"
                              : "Next"}
                          </Button>
                        </div>
                      </>
                    )}
                  </Card>
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
