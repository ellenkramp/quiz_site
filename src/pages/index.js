import React from "react"
import Layout from '../components/layout';
import { Body, ButtonLink, ButtonStyled } from '../../styles';

export default () => {
  return (
    <Layout>
      <Body>
        <ButtonLink to="/quiz"><ButtonStyled>Start the Quiz</ButtonStyled></ButtonLink>
      </Body>
    </Layout>
  )
}
