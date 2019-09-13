import React from "react"
import Layout from '../components/layout';
import { Body, ButtonStyled, ButtonLink, Question } from '../../styles';

export default () => <Layout>
  <Body>
    <Question>
      Your results are in!
    </Question>
    <ButtonLink to="/"><ButtonStyled>Home</ButtonStyled></ButtonLink>
  </Body>
</Layout>
