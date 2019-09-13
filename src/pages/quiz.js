import React from "react";
import { TestContextConsumer } from '../providers';
import Layout from '../components/layout';
import Choices from '../components/radiobuttons';
import { ButtonStyled, ChoiceContainer, Question, QuestionBox, QuizPage, ButtonLink } from '../../styles';

export default () => {
  return (
    <Layout>
      <TestContextConsumer>
        {({ currentIndex, updateQuestion, currentQuestion, totalQuestions }) => {
          return (
            <div>
              <QuizPage>
                <QuestionBox key={currentQuestion.prompt}>
                  <Question>{currentQuestion.prompt}</Question>
                  <ChoiceContainer>
                    <Choices />
                  </ChoiceContainer>
                </QuestionBox>
                {currentIndex < (totalQuestions - 1) ? <ButtonStyled variant="text" onClick={updateQuestion}>Next -></ButtonStyled> : <ButtonLink to="/results"><ButtonStyled>See My Results!</ButtonStyled></ButtonLink>}
              </QuizPage>
            </div>
          )
        }}
      </TestContextConsumer>
    </Layout>);
}
