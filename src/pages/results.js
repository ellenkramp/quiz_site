import React from "react"
import Layout from '../components/layout';
import { CountContextConsumer } from '../providers';
import { Body, ButtonStyled, ButtonLink, Question } from '../../styles';

export default (props) => (
  <Layout>
    <Body>
      <CountContextConsumer>{({ totalPoints }) => {
        console.log(props);
        return (
          <div>
            <Question>
              Your results are in!
            </Question>
            <p>You scored {totalPoints}!</p>
            <ButtonLink to="/"><ButtonStyled>Home</ButtonStyled></ButtonLink>
          </div>);
      }}
      </CountContextConsumer>
    </Body>
  </Layout>);
