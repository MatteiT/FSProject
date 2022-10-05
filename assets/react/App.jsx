import React from 'react';
import './styles/App.css';
import Nav from './components/nav';

// import Search from './components/Search.jsx';
import AlbumSearch from './components/AlbumSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vinyl Bin</h1>
        <Nav />
      </header>
      <div>
        {/* <Search /> */}
        <AlbumSearch />
      </div>
    </div>
  );
}

export default App;
