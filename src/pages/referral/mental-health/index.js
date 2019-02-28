import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Tab, Tabs, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import ClientDetails, { ClientDetailsValues } from "./ClientDetails";
import MedicalDetails, { MedicalDetailsValues } from "./MedicalDetails";
import Important from "./Important";
import ReferrerDetails from "./ReferrerDetails";
import Additional from "./Additional";
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
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Page className={classes.root}>
        <Formik
          initialValues={{
            ...ClientDetailsValues,
            ...MedicalDetailsValues
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
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
              <Tab label="Consent" />
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

            <Typography component="div" style={{ padding: "2rem" }}>
              <Buttons />
            </Typography>
          </Form>
        </Formik>
      </Page>
    );
  }
}

MentalHealth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(MentalHealth));
