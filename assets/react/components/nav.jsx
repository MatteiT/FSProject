import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
} from '@mui/material';
import { Switch} from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useDispatch, useSelector } from 'react-redux';
import { setMode} from '../features/themeSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
          <AppBar position="static">
            <Toolbar>
              <Box variant='outline' sx={{ flexGrow: 1 }}>
                <NavLink to="/">Home</NavLink>
              </Box>
            <Box variant='outline' sx={{ flexGrow: 1 }}>
                <NavLink to="/search">Search</NavLink>
              </Box>
              <Box variant='outline' sx={{ flexGrow: 1 }}>
                <NavLink to="/collection">Collection</NavLink>
              </Box>
              <Box variant='outline' sx={{ flexGrow: 1 }}>
                <NavLink to="/about">About</NavLink>
              </Box>
              <Switch
                onChange={() => dispatch(setMode())}
                label="Toggle Theme"
                icon={<Brightness4Icon />}
                checkedIcon={<ModeNightIcon />}
              />
            </Toolbar>
          </AppBar>    </>
  );
};

export default Nav;
