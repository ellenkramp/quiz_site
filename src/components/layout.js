import React, { useState } from 'react';
import Header from './header';
import { TestContextProvider } from '../providers/tracker';

export default (props) => {
  const [quizTotal, setQuizTotal] = useState(0);
  const [currentIndex, setIndex] = useState(0);

  const updateQuestion = () => {
    setIndex(currentIndex + 1);
    // setQuizTotal(quizTotal + 1);
  }
  return (
    <div>
      <TestContextProvider value={{ quizTotal, currentIndex, updateQuestion }}>
        <Header />
        {props.children}
      </TestContextProvider>
    </div>
  )
}