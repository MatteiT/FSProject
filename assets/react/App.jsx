import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home.jsx';
import Search from './components/Search';
import About from './components/About';
import Error from './components/Error';
import Collection from './components/Collection';
import Banner from './components/Banner';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { themeSettings } from './theme/theme';


function App() {

  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Banner />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    albums: state.app.albums,
    search: state.app.search,
    isLoading: state.app.isLoading,
    page: state.app.page,
    error: state.app.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    setPage: (page) => dispatch(setPage(page)),
    setSearch: (search) => dispatch(setSearch(search))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);