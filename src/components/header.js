import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { HeaderText, Patronus } from '../../styles';
import Unicorn from '../../public/unicorn.png';

export default function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <HeaderText variant="h2">Find Your Developer Patronus</HeaderText>
          <Patronus src={Unicorn} height="170" />
        </Toolbar>
      </AppBar>
    </div>
  );
}