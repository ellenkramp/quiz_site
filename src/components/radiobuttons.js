import React from 'react';
import { TestContextConsumer } from '../providers';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { FormLabelText, RadioGroupText } from '../../styles';


export default () => {
  return (
    <div>
      <TestContextConsumer>
        {({ currentQuestion, setCurrentPointValue, currentPointValue }) => {
          const choices = currentQuestion && currentQuestion.choices;
          return (
            <div>
              <FormControl component="fieldset">
                <RadioGroupText value={currentPointValue} onChange={(e) => setCurrentPointValue(parseInt(e.target.value))}>
                  {choices.map(choice => {
                    return (
                      <div key={choice.name}>
                        <FormControlLabel
                          value={choice.points}
                          control={<Radio />}
                          label={choice.name} />
                        <FormLabelText component="legend">{choice.description}</FormLabelText>
                      </div>)
                  })}
                </RadioGroupText>
              </FormControl>
            </div>
          )
        }}
      </TestContextConsumer>
    </div>
  )
}