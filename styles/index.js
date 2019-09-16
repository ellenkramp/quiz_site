import React from 'react';
import { Card, FormLabel, RadioGroup } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Question = styled.div`
  font-weight: bold;
  font-size: 21px;
  padding-bottom: 5px;
  text-align: left;
  font-family: 'Comfortaa', sans-serif;
`;

export const QuestionBox = styled(Card) `
  height: 50vh;
  width: 50vw;
  padding: 20px;
  border-radius: 3;
  font-family: 'Comfortaa', sans-serif;
`;

export const QuizPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ChoiceContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderText = styled.h1`
  color: white;
  font-family: 'Pacifico', 'san-serif';
  font-size: 45px;
  font-weight: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100vw
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

export const Patronus = styled.img`
  height: 200;
  align-self: flex-end;
`;

export const ButtonLink = styled(props => <Link {...props} />) `
  text-decoration: none;
  align-self: center;
`;

export const ButtonStyled = styled.button`
  margin: 20px;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  font-family: 'Pacifico', 'san-serif';
  background-color: orange;
  box-shadow: 1px 1px #888888;
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
`;

export const FormLabelText = styled.p`
  color: gray;
  margin: 0;
  padding-left: 30px;
  font-size: 14px;
`;

export const RadioGroupText = styled(RadioGroup) `
  color: black;
`;

