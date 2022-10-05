import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AlbumSearch() {
  const [hasError, setErrors] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState('');

  async function fetchData() {
    const res = await fetch(
      'https://api.discogs.com/database/search?q={' +
        query +
        '}&format=vinyl&type=release&token=JkxSftiJlhpPweROvvpAicjcsQWekgpKXYMqsAfY'
    );
    res
      .json()
      .then((res) => setAlbums(res.results[0]))
      .catch((err) => setErrors(err));
  }

  fetchData();

  console.log(albums);
  console.log(query);

  return (
    <div>
      <br />
      <form onSubmit={() => fetchData()}>
        <label>
          Name:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <input
        value={(e) => setQuery(e.target.value)}
        id="albumSearch"
        type="text"
        placeholder="Search by Album Title..."
      ></input>
      <button id="albumSearchSubmit" onClick={() => fetchData()}>
        Search
      </button>
      <img src={albums['cover_image']} style={{ width: '150px' }}></img>
      <br />
      <span>{albums.title}</span>
    </div>
  );
}

export default AlbumSearch;
