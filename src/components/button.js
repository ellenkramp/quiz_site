import React from "react";
import { navigate } from 'gatsby';
import { ButtonStyled, ButtonLink } from '../../styles';

export default ({ currentIndex, totalQuestions, handleNext, handleSubmit }) => {
  const lastQuestion = (currentIndex === (totalQuestions - 1));
  if (!lastQuestion) {
    const Button = ({ handleNext }) => (
      <ButtonStyled variant="text" onClick={handleNext}>Next -></ButtonStyled>
    );
  }
  const Button = ({ handleSubmit }) => (
    <ButtonStyled onClick={handleSubmit}>See My Results!</ButtonStyled>
  );
  return <Button />

};