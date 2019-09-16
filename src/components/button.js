import React from "react";
import { ButtonStyled, ButtonLink } from '../../styles';

export default ({ props }) => {
  const { handleNext, handleSubmit, currentIndex, totalQuestions } = props;
  let Button;
  const lastQuestion = (currentIndex === (totalQuestions - 1));

  if (!lastQuestion) {
    Button = () => {
      return (
        <ButtonStyled variant="text" onClick={handleNext}>Next -></ButtonStyled>
      )
    };
  }
  if (lastQuestion) {
    Button = () => (
      <ButtonLink to="/results"><ButtonStyled onClick={handleSubmit}>See My Results!</ButtonStyled></ButtonLink>
    );
  }
  return <Button />

};