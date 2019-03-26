import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

import withStyles from "@material-ui/core/styles/withStyles";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import withRoot from "../../../utils/withRoot";
import Page from "../../../components/Page";
import SEO from "../../../components/SEO";
import HBUExpansionPanel from "./HBUExpansionPanel";
import questions from "./data/questions.json";
import ErrorMessage from "./ErrorMessage";

const CREATE_HBU_EVALUATION_MUTATION = gql`
  mutation CREATE_HBU_EVALUATION_MUTATION(
    $nmo_name: String!
    $nmo_cantrustprogramme: Int
    $nmo_cleanandtidy: Int
    $nmo_culturalrespect: Int
    $nmo_healthgoals: Int
    $nmo_infogiven: Int
    $nmo_inputallowed: Int
    $nmo_listenedtomyconcerns: Int
    $nmo_mysatisfaction: Int
    $nmo_pathways: Int
    $nmo_timespent: Int
    $nmo_treatedwithrespect: Int
    $nmo_waittime: Int
    $nmo_wouldrecommend: Int
    $nmo_availability: Int
  ) {
    createHBUEvaluation(
      nmo_name: $nmo_name
      nmo_cantrustprogramme: $nmo_cantrustprogramme
      nmo_cleanandtidy: $nmo_cleanandtidy
      nmo_culturalrespect: $nmo_culturalrespect
      nmo_healthgoals: $nmo_healthgoals
      nmo_infogiven: $nmo_infogiven
      nmo_inputallowed: $nmo_inputallowed
      nmo_listenedtomyconcerns: $nmo_listenedtomyconcerns
      nmo_mysatisfaction: $nmo_mysatisfaction
      nmo_pathways: $nmo_pathways
      nmo_timespent: $nmo_timespent
      nmo_treatedwithrespect: $nmo_treatedwithrespect
      nmo_waittime: $nmo_waittime
      nmo_wouldrecommend: $nmo_wouldrecommend
      nmo_availability: $nmo_availability
    )
  }
`;

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

class HBUForm extends React.Component {
  state = {
    expanded: questions[0].name, // expand first panel at start
    answers: { nmo_name: "First HBU Evaluation" }
  };

  handlePanelExpand = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  handleRadioChange = panel => (event, expanded) => {
    const name = event.target.name;
    const value = event.target.value;
    const expandDelay = 300;

    setTimeout(() => {
      this.setState(previousState => {
        previousState.answers[name] = parseInt(value);

        return {
          answers: previousState.answers,
          expanded: expanded ? panel : false
        };
      });
    }, expandDelay);
  };

  render() {
    const { expanded } = this.state;
    const { classes } = this.props;

    const createHBUEvaluation = () => {
      alert("Hi");
    };
    const loading = false;
    const error = false;

    return (
      <Mutation
        mutation={CREATE_HBU_EVALUATION_MUTATION}
        variables={this.state.answers}
      >
        {(createHBUEvaluation, { loading, error }) => (
          <Page className={classes.root} showHeader title="Whanau Evaluation">
            <SEO title="Whanau Evaluation">
              <meta name="description" content="HBu Whanau Evaluation Form" />
            </SEO>
            {questions.map((question, index, array) => {
              // we need the name of the next question to auto expand on radio select
              question.next = array[index + 1]
                ? array[index + 1].name
                : question.name;

              return (
                <HBUExpansionPanel
                  key={index}
                  name={question.name}
                  expanded={expanded === question.name}
                  expandPanel={this.handlePanelExpand(question.name)}
                  title={question.title}
                  handleRadioChange={this.handleRadioChange(question.next)}
                />
              );
            })}

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

            <ErrorMessage error={error} />
          </Page>
        )}
      </Mutation>
    );
  }
}

export default withRoot(withStyles(styles)(HBUForm));
