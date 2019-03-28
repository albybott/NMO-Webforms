import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%"
  }
});

const HBUButtons = props => {
  const { createHBUEvaluation, loading, classes } = props;

  return (
    <div className={classes.buttons}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            createHBUEvaluation()
              .then(result => {
                console.log(result);
              })
              .catch(error => {
                console.log(error);
              });
          }}
          className={classes.button}
          disabled={loading}
          size="large"
        >
          Submit
                </Button>
        {loading && (
          <CircularProgress
            size={24}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </div>
  )
}

export default withStyles(styles)(HBUButtons);
