import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home.jsx';
import AutocompleteMUI from './components/AutocompleteMUI';
import About from './components/About';
import Error from './components/Error';
import Collection from './components/Collection';
import Banner from './components/Banner';





function App() {
  return (
    <Router>
        <Banner />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/autocompleteMUI" element={<AutocompleteMUI />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  );
}

export default App;
