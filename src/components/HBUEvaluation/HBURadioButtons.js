import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiRadio from "@material-ui/core/Radio";
import MuiRadioGroup from "@material-ui/core/RadioGroup";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiFormControl from "@material-ui/core/FormControl";

const FormControl = withStyles(theme => ({
  root: {
    padding: 0,
    display: "flex"
  }
}))(MuiFormControl);

const FormControlLabel = withStyles(theme => ({
  root: {
    marginRight: theme.spacing.unit * 4
  },
  label: {
    fontSize: theme.spacing.unit * 2
  }
}))(MuiFormControlLabel);

const RadioGroup = withStyles(theme => ({
  root: {
    flexDirection: "column",

    [theme.breakpoints.up(1080 + theme.spacing.unit * 3 * 2)]: {
      flexDirection: "row"
    }
  }
}))(MuiRadioGroup);

const Radio = withStyles(theme => ({
  root: {
  }
}))(MuiRadio);

const radios = [
  {
    value: "175800000",
    label: "Strongly Agree"
  },
  {
    value: "175800001",
    label: "Agree"
  },
  {
    value: "175800002",
    label: "Neutral"
  },
  {
    value: "175800003",
    label: "Disagree"
  },
  {
    value: "175800004",
    label: "Strongly Disagree"
  },
  {
    value: "175800005",
    label: "N/A"
  }
];

export default props => (
  <FormControl>
    <RadioGroup
      aria-label="Evaluaion"
      name={props.name}
      onChange={props.onChange}
    >
      {radios.map((radio, index) => (
        <FormControlLabel
          key={index}
          value={radio.value}
          control={<Radio />}
          label={radio.label}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
