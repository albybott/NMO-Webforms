import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, Button, Hidden, CircularProgress } from "@material-ui/core";
import { Formik, Form } from "formik";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import green from "@material-ui/core/colors/green";
import stringify from "json-stringify-pretty-compact";

import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import SEO from "../../../components/SEO";
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
    $nmo_perferredname: String
    $nmo_birthdate: String
    $nmo_nhi: String
    $nmo_gendercode: Int
    $nmo_telephone1: String
    $nmo_mobilephone: String
    $nmo_address1_line1: String
    $nmo_address1_line2: String
    $nmo_address1_line3: String
    $nmo_address1_city: String
    $nmo_address1_postalcode: String
    $nmo_rawdata: String
  ) {
    createElectronicSubmission(
      nmo_firstname: $nmo_firstname
      nmo_lastname: $nmo_lastname
      nmo_perferredname: $nmo_perferredname
      nmo_birthdate: $nmo_birthdate
      nmo_nhi: $nmo_nhi
      nmo_gendercode: $nmo_gendercode
      nmo_telephone1: $nmo_telephone1
      nmo_mobilephone: $nmo_mobilephone
      nmo_address1_line1: $nmo_address1_line1
      nmo_address1_line2: $nmo_address1_line2
      nmo_address1_line3: $nmo_address1_line3
      nmo_address1_city: $nmo_address1_city
      nmo_address1_postalcode: $nmo_address1_postalcode
      nmo_rawdata: $nmo_rawdata
    )
  }
`;

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
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
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

  formatRawData = values => {
    let formattedJSON = stringify(values, {
      indent: 4,
      margins: true,
      arrayMargins: true
    });

    return formattedJSON.replace(/["]|(nmo_)/g, "");
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <Mutation mutation={CREATE_ELECTRONIC_SUBMISSION_MUTATION}>
        {(createElectronicSubmission, { loading, error }) => {
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
                  createElectronicSubmission({
                    variables: {
                      ...values,
                      nmo_rawdata: this.formatRawData(values)
                    }
                  })
                    .then(result => {
                      console.log(result);

                      // go to the last confirmation step
                      this.setState(state => ({
                        activeStep: state.activeStep + 1
                      }));
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }}
                render={props => {
                  const {
                    // values,
                    // touched,
                    // errors,
                    // dirty,
                    // isSubmitting,
                    // handleChange,
                    // setFieldValue,
                    // handleBlur,
                    handleSubmit
                    // handleReset
                  } = props;

                  return (
                    <>
                      <SEO title="Mental Health Referral">
                        <meta
                          name="description"
                          content="Mental Health Referral Form"
                        />
                      </SEO>
                      <Form onSubmit={handleSubmit}>
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

                                {activeStep < steps.length - 1 && (
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                  >
                                    Next
                                  </Button>
                                )}

                                {activeStep === steps.length - 1 && (
                                  <div className={classes.wrapper}>
                                    <Button
                                      variant="contained"
                                      color="primary"
                                      disabled={loading}
                                      type="submit"
                                    >
                                      Send Referral
                                    </Button>
                                    {loading && (
                                      <CircularProgress
                                        size={24}
                                        className={classes.buttonProgress}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </Card>
                      </Form>
                    </>
                  );
                }}
              />
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
