import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import { format } from "date-fns";
import Page from "../../components/Page";
import SEO from "../../components/SEO";
import questions from "./data/questions.json";
import ErrorMessage from "../ErrorMessage";
import HBUQuestions from "./HBUQuestions";
import HBUButtons from "./HBUButtons";

const CREATE_HBU_EVALUATION_MUTATION = gql`
  mutation CREATE_HBU_EVALUATION_MUTATION(
    $nmo_name: String!
    $nmo_location: String
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
      nmo_location: $nmo_location
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

const title = "Whanau Evaluation";

class HBUEvaluation extends React.Component {
  state = {
    expandedPanel: questions[0].name, // expand first panel at start
    answers: {
      nmo_name: `${title}: ${format(new Date(), "dd/MM/yyyy hhmmss")}`,
      nmo_location: this.props.location
    }
  };

  handlePanelExpand = currentPanel => expandedPanel => {
    this.setState({
      expandedPanel: expandedPanel ? currentPanel : false
    });
  };

  handleRadioChange = panel => (event, expandedPanel) => {
    const name = event.target.name;
    const value = event.target.value;
    const expandDelay = 300;

    setTimeout(() => {
      this.setState(previousState => {
        previousState.answers[name] = parseInt(value);

        return {
          answers: previousState.answers,
          expandedPanel: expandedPanel ? panel : false
        };
      });
    }, expandDelay);
  };

  render() {
    const { expandedPanel } = this.state;
    const { location } = this.props;

    return (
      <Mutation
        mutation={CREATE_HBU_EVALUATION_MUTATION}
        variables={this.state.answers}
      >
        {(createHBUEvaluation, { loading, error }) => (
          <Page showHeader title={title} info={location}>
            <SEO title={`${title}${location && " - " + location}`}>
              <meta name="description" content="Whanau Evaluation Form" />
            </SEO>

            <HBUQuestions
              expandedPanel={expandedPanel}
              handleExpandPanel={this.handlePanelExpand}
              handleRadioChange={this.handleRadioChange}
            />

            <HBUButtons
              createHBUEvaluation={createHBUEvaluation}
              loading={loading}
            />

            <ErrorMessage error={error} />
          </Page>
        )}
      </Mutation>
    );
  }
}

export default HBUEvaluation;
