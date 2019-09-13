import React, { useState } from 'react';
import data from '../../data.json';

export const TestContext = React.createContext(0);

export const TestContextProvider = TestContext.Provider;

export const TestContextConsumer = TestContext.Consumer;

export default (props) => {
  const [quizTotal, setQuizTotal] = useState(0);
  const [currentIndex, setIndex] = useState(0);
  const totalQuestions = data.questions.length;
  const currentQuestion = data.questions[currentIndex || 0];

  const updateQuestion = () => {
    setIndex(currentIndex + 1);
    return;
  }
  const updateTotal = (e) => {
    setQuizTotal(quizTotal + e.target.value);
    return;
  }
  return (
    <TestContextProvider value={{ totalQuestions, quizTotal, currentIndex, updateQuestion, updateTotal, currentQuestion }}>
      {props.children}
    </TestContextProvider>
  )
}
