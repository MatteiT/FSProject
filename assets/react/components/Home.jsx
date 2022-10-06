import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const urlDiscogs = 'https://www.discogs.com/artist/';

  useEffect(() => {
    async function fetchData() {
      const res = await axios
        .get(
          `https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`
        )
        .catch(() => {
          if (error.response) {
            console.log('404 error');
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
      setAlbums(res.data.results);
      console.log(res.data.results);
    }
    fetchData();
  }, [search, page]);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for an album or artist here ..."
          />
        </form>
        <div>
          {albums.map((album) => (
            <div key={album.id}>
              <h2>{album.title}</h2>
              <p>{album.year}</p>
              <img src={album.thumb} alt={album.title} />
              <a href={`${urlDiscogs}${album.id}`}>view on Discogs </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Search;
