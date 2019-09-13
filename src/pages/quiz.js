import React from "react";
import { TestContextConsumer } from '../providers';
import Layout from '../components/layout';
import Choice from '../components/radiobuttons';
import { ButtonStyled, Choices, Question, QuestionBox, QuizPage } from '../../styles';

export default () => {
  return (
    <Layout>
      <TestContextConsumer>
        {({ currentIndex, updateQuestion, currentQuestion }) => {
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
              <ButtonStyled onClick={updateQuestion}>Next</ButtonStyled>
            </div>
          )
        }}
      </TestContextConsumer>
    </Layout>);
}
