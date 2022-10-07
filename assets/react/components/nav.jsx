import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from '@mui/material';

const Nav = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">Home</NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/autocompleteMUI">Autocomplete</NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/about">About</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
