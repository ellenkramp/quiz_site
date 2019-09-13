import React from 'react';
import { Button, FormLabel, RadioGroup } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Question = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding-bottom: 15px;
  align-self: center;
`;

export const QuestionBox = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 3;
  margin: 50px;
`;

export const QuizPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Choices = styled.div`
color: white;
`;

export const HeaderText = styled.h1`
  color: white;
  font-family: 'Pacifico', 'san-serif';
  font-weight: 100;
`;

export const Patronus = styled.img`
  height: 200;
  align-self: flex-end;
`;

export const ButtonLink = styled(Link) `
  text-decoration: none;
`;

export const ButtonStyled = styled(Button) `
  margin: 10px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLabelText = styled(FormLabel) `
  color: black;
`;

export const RadioGroupText = styled(RadioGroup) `
  color: black;
`;

