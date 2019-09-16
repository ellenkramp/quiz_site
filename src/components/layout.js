import React from 'react';
import Header from './header';
import TestContextProvider from '../providers';

export default (props) => {
  return (
    <div>
      <Header />
      <TestContextProvider>
        {props.children}
      </TestContextProvider>
    </div>
  )
}