import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import axios from 'axios';

// autocomplete search bar with material ui and discogs api
const AutocompleteMUI = () => {
  const [albums, setAlbums] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const urlDiscogs = 'https://www.discogs.com/artist/';

  React.useEffect(() => {
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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            id="combo-box-demo"
            options={albums}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Combo box"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            )}
          />
        </Stack>
      </div>
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
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default AutocompleteMUI;
