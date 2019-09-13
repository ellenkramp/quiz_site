import React from 'react';
import { TestContextConsumer } from '../providers';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { FormLabelText, RadioGroupText } from '../../styles';


export default () => {
  const [value, setValue] = React.useState('');

  const handleEvent = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <TestContextConsumer>
        {({ currentQuestion }) => {
          const choices = currentQuestion && currentQuestion.choices;
          return (
            <div>
              <FormControl component="fieldset">
                <RadioGroupText value={value} onChange={handleEvent}>
                  {choices.map(choice => (
                    <div key={choice.name}>
                      <FormControlLabel
                        value={choice.value}
                        control={<Radio />}
                        label={choice.name} />
                      <FormLabelText component="legend">{choice.description}</FormLabelText>
                    </div>))}
                </RadioGroupText>
              </FormControl>
            </div>
          )
        }}
      </TestContextConsumer>
    </div>
  )
}