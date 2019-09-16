import React from "react";
import { TestContextConsumer } from '../providers';
import Button from '../components/button';
import Layout from '../components/layout';
import Choices from '../components/radiobuttons';
import Results from '../components/results';
import { ChoiceContainer, Question, QuestionBox, QuizPage } from '../../styles';

export default () => {
  return (
    <Layout>
      <TestContextConsumer>
        {({ currentIndex, currentQuestion, totalQuestions, handleNext, handleSubmit, totalPoints }) =>
          <div>
            {currentIndex === totalQuestions ? <Results totalPoints={totalPoints} /> :
              <QuizPage totalPoints={totalPoints}>
                <QuestionBox key={currentIndex}>
                  <Question>{currentQuestion.prompt}</Question>
                  <ChoiceContainer>
                    <Choices />
                  </ChoiceContainer>
                </QuestionBox>
                <Button props={{ currentIndex, totalQuestions, handleNext, handleSubmit }} />
              </QuizPage>}
          </div>
        }
      </TestContextConsumer>
    </Layout>);
}
