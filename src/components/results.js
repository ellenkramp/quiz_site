import React from "react"
import Layout from '../components/layout';
import { Body, ButtonStyled, ButtonLink, Question } from '../../styles';

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
