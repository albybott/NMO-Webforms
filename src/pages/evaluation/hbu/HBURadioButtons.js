import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const ButtonControl = withStyles(theme => ({
  root: {
    padding: 0,
    display: "flex"
  }
}))(FormControl);

const RadioLabel = withStyles(theme => ({
  root: {
    marginRight: theme.spacing.unit * 4
  },
  label: {
    fontSize: theme.spacing.unit * 2
  }
}))(FormControlLabel);

const RadioButton = withStyles(theme => ({
  root: {
    // marginRight: theme.spacing.unit * 1
  }
}))(Radio);

const RadioButtonGroup = withStyles(theme => ({
  root: {
    flexDirection: "column",

    [theme.breakpoints.up(1080 + theme.spacing.unit * 3 * 2)]: {
      flexDirection: "row"
    }
  }
}))(RadioGroup);

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
  <ButtonControl>
    <RadioButtonGroup
      aria-label="Evaluaion"
      name={props.name}
      onChange={props.onChange}
      // row
    >
      {radios.map((radio, index) => (
        <RadioLabel
          key={index}
          value={radio.value}
          control={<RadioButton />}
          label={radio.label}
        />
      ))}
    </RadioButtonGroup>
  </ButtonControl>
);
