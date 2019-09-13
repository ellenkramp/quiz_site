import React from "react";
import { TestContextConsumer } from '../providers/tracker';
import Layout from '../components/layout';
import Choice from '../components/radiobuttons';
import { ButtonStyled, Choices, Question, QuestionBox, QuizPage } from '../../styles';
import data from '../../data.json';

export default () => {
  return (
    <TestContextConsumer>
      {({ currentIndex, updateQuestion }) => {
        const currentQuestion = data.questions[currentIndex || 0];
        return (<Layout>
          <QuizPage>
            <QuestionBox key={currentQuestion.prompt}>
              <Question>{currentQuestion.prompt}</Question>
              <Choices>
                <Choice />
              </Choices>
            </QuestionBox>
          </QuizPage>
          <ButtonStyled onClick={updateQuestion}>Next</ButtonStyled>
        </Layout>)
      }}
    </TestContextConsumer>);
}
