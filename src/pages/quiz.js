import React from "react";
import { TestContextConsumer } from '../providers';
import Layout from '../components/layout';
import Choice from '../components/radiobuttons';
import { ButtonStyled, Choices, Question, QuestionBox, QuizPage, ButtonLink } from '../../styles';

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
                  <Choices>
                    <Choice />
                  </Choices>
                </QuestionBox>
              </QuizPage>
              {currentIndex < (totalQuestions - 1) ? <ButtonStyled onClick={updateQuestion}>Next</ButtonStyled> : <ButtonLink to="/results"><ButtonStyled>See My Results!</ButtonStyled></ButtonLink>}
            </div>
          )
        }}
      </TestContextConsumer>
    </Layout>);
}
