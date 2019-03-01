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
  FormControlLabel
} from "@material-ui/core";

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
                        label="Has the person you are referring given consent to release information?"
                        component={Switch}
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Field
                        name="clientRequestingService"
                        label="Are they requesting the service?"
                        component={Switch}
                      />
                    }
                  />
                  <FormControlLabel
                    control={
                      <Field
                        name="parentalConsent"
                        label="If the person you are referring is under 16 years of age, have you gained parental consent?"
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
