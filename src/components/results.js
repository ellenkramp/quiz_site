import React from "react"
import { BodyText, ButtonStyled, ButtonLink, Result, ResultsHeader, ResultsContainer } from '../../styles';
import data from '../../data.json';

export default ({ totalPoints }) => {
  let Patronus;
  console.log(totalPoints);
  switch (true) {
    case totalPoints > 40:
      Patronus = "Monkey";
      break;
    case totalPoints > 30:
      Patronus = "Peacock";
      break;
    case totalPoints > 20:
      Patronus = "Bear";
      break;
    case totalPoints > 10:
      Patronus = "Dog";
      break;
    case totalPoints < 11:
      Patronus = "Sloth";
      break;
    default:
      Patronus = "Sloth";
  }
  console.log(Patronus);
  return (
    <ResultsContainer>
      <ResultsHeader>
        Your results are in!
      </ResultsHeader>
      <BodyText>Your Developer Patronus is a</BodyText>
      <Result>{Patronus}</Result>
      <BodyText>{data.results[Patronus]}</BodyText>
      <ButtonLink to="/">
        <ButtonStyled>
          Home
      </ButtonStyled>
      </ButtonLink>
    </ResultsContainer>
  )
}
