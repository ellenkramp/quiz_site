import React from "react"
import Layout from '../components/layout';
import { TestContextConsumer } from '../providers';
import { Body, ButtonStyled, ButtonLink, Question } from '../../styles';

export default (props) => (
  <Layout>
    <Body>
      <TestContextConsumer>{({ totalPoints }) => (
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
        </div>)
      }
      </TestContextConsumer>
    </Body>
  </Layout>);
