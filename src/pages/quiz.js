import React from "react";
import { navigate } from 'gatsby';
import { TestContextConsumer } from '../providers';
import Button from '../components/button';
import Layout from '../components/layout';
import Choices from '../components/radiobuttons';
import { ChoiceContainer, Question, QuestionBox, QuizPage } from '../../styles';

export default () => {
  return (
    <Layout>
      <TestContextConsumer>
        {({ currentIndex, updateQuestion, currentQuestion, totalQuestions, handleNext, handleSubmit }) =>
          (
            <div>
              <QuizPage>
                <QuestionBox key={currentQuestion.prompt}>
                  <Question>{currentQuestion.prompt}</Question>
                  <ChoiceContainer>
                    <Choices />
                  </ChoiceContainer>
                </QuestionBox>
                <Button props={{ currentIndex, totalQuestions, handleNext, handleSubmit }} />
              </QuizPage>
            </div>
          )
        }
      </TestContextConsumer>
    </Layout>);
}
