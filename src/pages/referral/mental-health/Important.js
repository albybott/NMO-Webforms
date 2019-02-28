import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

const styles = theme => ({
    card: {
      marginBottom: 16,
      padding: 16,
      paddingBottom: 32
    }
  }),
  Important = props => {
    return (
      <Card className={props.classes.card}>
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
                    control={<Checkbox name="clientConsent" />}
                    label="Has the person you are referring given consent to release information?"
                  />
                  <FormControlLabel
                    control={<Checkbox name="clientRequestingService" />}
                    label="Are they requesting the service?"
                  />
                  <FormControlLabel
                    control={<Checkbox name="parentalConsent" />}
                    label="If the person you are referring is under 16 years of age, have you gained parental consent?"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

Important.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Important);
