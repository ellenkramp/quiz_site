import React from "react";
import { ButtonStyled, ButtonLink } from '../../styles';

export default ({ props }) => {
  const { handleNext, handleSubmit, currentIndex, totalQuestions, totalPoints } = props;
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
      <ButtonStyled onClick={handleSubmit}>See My Results!</ButtonStyled>
    );
  }
  return <Button />

};