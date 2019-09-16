import React, { useState } from 'react';
import data from '../../data.json';

export const TestContext = React.createContext(0);

export const TestContextProvider = TestContext.Provider;

export const TestContextConsumer = TestContext.Consumer;

export default (props) => {
  const [currentIndex, setIndex] = useState(0);
  const totalQuestions = data.questions.length;
  const currentQuestion = data.questions[currentIndex || 0];
  const [totalPoints, setTotalPoints] = useState(0);
  const [currentPointValue, setCurrentPointValue] = useState(0);

  const handleNext = () => {
    const newNum = currentPointValue + totalPoints;
    setTotalPoints(newNum);
    setIndex(currentIndex + 1);
  }
  const handleSubmit = () => {
    const newNum = currentPointValue + totalPoints;
    setTotalPoints(newNum);
  }

  return (
    <TestContextProvider value={{
      currentQuestion,
      currentIndex,
      totalQuestions,
      totalPoints,
      setTotalPoints,
      setCurrentPointValue,
      currentPointValue,
      handleNext,
      handleSubmit
    }}>
      {props.children}
    </TestContextProvider>
  )
}
