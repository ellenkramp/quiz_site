import React from 'react';
import Header from './header';
import TestContextProvider from '../providers';

export default (props) => {
  return (
    <div>
      <TestContextProvider>
        <Header />
        {props.children}
      </TestContextProvider>
    </div>
  )
}