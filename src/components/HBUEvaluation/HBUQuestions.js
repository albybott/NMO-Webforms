import React from "react";
import questions from "./data/questions.json";
import HBUPanel from "./HBUPanel";

export default props => {
  const { expandedPanel, handleExpandPanel, handleRadioChange } = props;

  return (
    <>
      {questions.map((question, index, array) => {
        question.next = array[index + 1]
          ? array[index + 1].name // next panel name is used for auto expand
          : question.name;

        return (
          <HBUPanel
            key={index}
            name={question.name}
            title={question.title}
            isExpanded={expandedPanel === question.name}
            handleExpandPanel={handleExpandPanel(question.name)}
            handleRadioChange={handleRadioChange(question.next)}
          />
        );
      })}
    </>
  )
}