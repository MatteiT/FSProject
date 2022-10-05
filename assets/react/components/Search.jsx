import React, { useState, useEffect } from 'react';

const Search = () => {
  const [hasError, setErrors] = useState(false);
  const [albums, setAlbums] = useState([]);
  const query = 'Reflektor';

  function AlbumSearch() {
    useEffect(() => {
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
    }, [query]);

    return (
      <div>
        <br />
        <img src={albums['cover_image']} style={{ width: '150px' }}></img>
        <br />
        <span>{albums['title']}</span>
      </div>
    );
  }

  return (
    <>
      <input
        id="albumSearch"
        type="text"
        placeholder="Search by Album Title..."
      ></input>
      <button id="albumSearchSubmit" onClick={AlbumSearch}>
        Search
      </button>
    </>
  );
};

export default Search;
