import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import { Switch } from "material-ui-formik-components";

import {
  Grid,
  CardHeader,
  CardContent,
  FormControl,
  FormGroup,
  FormControlLabel,
  Typography
} from "@material-ui/core";

function SwitchLabel(props) {
  return <Typography variant="subtitle1">{props.children}</Typography>;
}

const styles = theme => ({
    root: {}
  }),
  Important = props => {
    return (
      <>
        <CardHeader
          title="Important"
          titleTypographyProps={{ variant: "h5" }}
        />
        <CardContent>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Field
                        name="clientConsent"
                        label={
                          <SwitchLabel>
                            Has the person you are referring given consent to
                            release information?
                          </SwitchLabel>
                        }
                        component={Switch}
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Field
                        name="clientRequestingService"
                        label={
                          <SwitchLabel>
                            Are they requesting the service?
                          </SwitchLabel>
                        }
                        component={Switch}
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Field
                        name="parentalConsent"
                        label={
                          <SwitchLabel>
                            If the person you are referring is under 16 years of
                            age, have you gained parental consent?
                          </SwitchLabel>
                        }
                        component={Switch}
                      />
                    }
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </>
    );
  };

Important.propTypes = {
  classes: PropTypes.object.isRequired
};

const ImportantValues = {
  clientConsent: true,
  clientRequestingService: true,
  parentalConsent: true
};

export { ImportantValues };

export default withStyles(styles)(Important);
