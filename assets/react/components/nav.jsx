import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { Switch} from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {AppContext} from '../context/AppContext';


const Nav = () => {
  const [darkMode, setDarkMode] = useContext(AppContext);

  const handleDarkmode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box variant='outline' sx={{ flexGrow: 1 }}>
            <NavLink to="/">Home</NavLink>
          </Box>
        <Box variant='outline' sx={{ flexGrow: 1 }}>
            <NavLink to="/autocompleteMUI">Autocomplete</NavLink>
          </Box>
          <Box variant='outline' sx={{ flexGrow: 1 }}>
            <NavLink to="/about">About</NavLink>
          </Box>
          <Box variant='outline' sx={{ flexGrow: 1 }}>
            <NavLink to="/collection">Collection</NavLink>
          </Box>
          <Switch
            onClick={() => handleDarkmode()}
            icon={<Brightness4Icon />}
            checkedIcon={<ModeNightIcon />}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
