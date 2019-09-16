import React from "react"
import { ButtonStyled, ButtonLink, Question } from '../../styles';

export default ({ totalPoints }) =>
  <div>
    <Question>
      Your results are in!
    </Question>
    <p>You scored {totalPoints}!</p>
    <ButtonLink to="/">
      <ButtonStyled>
        Home
      </ButtonStyled>
    </ButtonLink>
  </div>
