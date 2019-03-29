import React from "react";
import { Form, Field } from "formik";
import { Grid, Typography } from "@material-ui/core";
import { TextField } from "../../utils/material-ui-formik-components";
import ErrorMessage from "../ErrorMessage";
import HBUQuestions from "./HBUQuestions";
import HBUButtons from "./HBUButtons";

export default props => {
  const {
    handleSubmit,
    expandedPanel,
    handlePanelExpand,
    handleRadioChange,
    loading,
    error
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Typography variant="caption">Enter Your Details</Typography>
      <Grid container spacing={16} style={{ marginBottom: "16px" }}>
        <Grid item xs={4}>
          <Field
            name="nmo_firstname"
            label="First Name"
            variant="outlined"
            component={TextField}
          />
        </Grid>
        <Grid item xs={4}>
          <Field
            name="nmo_lastname"
            label="Surname"
            variant="outlined"
            component={TextField}
          />
        </Grid>
        <Grid item />
      </Grid>

      <HBUQuestions
        expandedPanel={expandedPanel}
        handlePanelExpand={handlePanelExpand}
        handleRadioChange={handleRadioChange}
      />

      <HBUButtons loading={loading} />

      <ErrorMessage error={error} />
    </Form>
  );
};
