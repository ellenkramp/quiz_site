import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { HeaderText, HeaderContent, Patronus } from '../../styles';
import Unicorn from '../assets/unicorn.png';

export default function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static">
        <HeaderContent>
          <HeaderText variant="h2">Find Your Developer Patronus</HeaderText>
          <Patronus src={Unicorn} height="170" />
        </HeaderContent>
      </AppBar>
    </div>
  );
}