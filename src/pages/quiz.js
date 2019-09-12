import React from "react"
import Layout from '../components/layout';
import data from '../../data.json';
import { Question } from '../../styles/styled';

export default () => {
  console.log(data);
  return (
    <div>
      {data.questions.map(
        question => <Question>{question.prompt}
          {question.choices.map(choice =>
            <div>
              <div>{choice.name}</div>
              <div>{choice.description}</div>
            </div>)}
        </Question>)}
    </div>);
}
