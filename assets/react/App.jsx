import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home.jsx';
import Search from './components/Search';
import About from './components/About';
import Error from './components/Error';
import Login from './components/Login';
import Register from './components/Register';
import Collection from './components/Collection';
import Banner from './components/Banner';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { themeSettings } from './theme/theme';

export default function App() {
  const { auth } = useSelector((state) => state);
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Banner />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={auth ? <Search /> : null} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collection" element={auth ? <Collection /> : null} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Router>
  );
}



