import React from "react";
import { Typography } from "@material-ui/core";

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i} style={{ padding: "16px 0 0 0" }}>
        <Typography variant="h6" color="error" align="right">
          {`Shoot! ${error.message.replace("GraphQL error: ", "")}`}
        </Typography>
      </div>
    ));
  }
  return (
    <div>
      <Typography
        variant="h6"
        color="error"
        align="right"
        style={{ padding: "16px 0 0 0" }}
      >
        {`Aue! ${error.message.replace("GraphQL error: ", "")}`}
      </Typography>
    </div>
  );
};

export default DisplayError;
