import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";

import client from "../../../utils/client";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import ClientDetails, { ClientValues } from "./ClientDetails";
import MedicalDetails, { MedicalValues } from "./MedicalDetails";
import Important, { ImportantValues } from "./Important";
import ReferrerDetails, { ReferrerValues } from "./ReferrerDetails";
import Additional, { AdditionalValues } from "./Additional";
import Buttons from "./Buttons";

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
    value: 0,
    values: {}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <ApolloProvider client={client}>
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
              // alert(JSON.stringify(values, null, 2));
              // this.setState({ values });
              // client
              //   .query({
              //     query: gql`
              //       {
              //         rates(currency: "USD") {
              //           currency
              //         }
              //       }
              //     `
              //   })
              //   .then(result => console.log(result));
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
      </ApolloProvider>
    );
  }
}

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MentalHealth));
