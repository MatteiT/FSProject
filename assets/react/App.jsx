import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home.jsx';
import AutocompleteMUI from './components/AutocompleteMUI';
import About from './components/About';
import Error from './components/Error';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/autocompleteMUI" element={<AutocompleteMUI />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
