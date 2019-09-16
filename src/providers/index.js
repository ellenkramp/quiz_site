import React, { useState } from 'react';
import { navigate } from 'gatsby';
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

  const updateCount = () => {
    setTotalPoints(currentPointValue + totalPoints);
    console.log("updatedTotal", totalPoints)
  }

  const resetCurrentPointValue = () => {
    setCurrentPointValue(-1);
    console.log(currentPointValue);
  }

  const updateQuestion = () => {
    setIndex(currentIndex + 1);
    return;
  }

  const handleNext = () => {
    const newNum = () => currentPointValue + totalPoints;
    setTotalPoints(newNum);
    return updateQuestion();
  }
  const handleSubmit = () => {
    const newNum = currentPointValue + totalPoints;
    setTotalPoints(newNum)
      .then(navigate('/results', {
        state: { newNum },
      }));
  }

  return (
    <TestContextProvider value={{
      currentQuestion,
      updateQuestion,
      currentIndex,
      setIndex,
      totalQuestions,
      totalPoints,
      setTotalPoints,
      currentPointValue,
      setCurrentPointValue,
      handleNext,
      handleSubmit
    }}>
      {props.children}
    </TestContextProvider>
  )
}
