import React from "react";
import { Form } from 'formik'
import ErrorMessage from "../ErrorMessage";
import HBUQuestions from "./HBUQuestions";
import HBUButtons from "./HBUButtons";

export default props => {
  const { handleSubmit, expandedPanel, handlePanelExpand, handleRadioChange, createHBUEvaluation, loading, error } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <HBUQuestions
        expandedPanel={expandedPanel}
        handlePanelExpand={handlePanelExpand}
        handleRadioChange={handleRadioChange}
      />

      <HBUButtons
        createHBUEvaluation={createHBUEvaluation}
        loading={loading}
      />

      <ErrorMessage error={error} />
    </Form>
  )
};
