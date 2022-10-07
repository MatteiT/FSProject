import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import axios from 'axios';
import { Stack } from '@mui/system';
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const AutocompleteMUI = () => {
  const [albums, setAlbums] = React.useState([]);
  const [search, setSearch] = React.useState('Fatboy Slim');
  const [page, setPage] = React.useState(1);
  const urlDiscogs = 'https://www.discogs.com/artist/';

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`
      );
      setAlbums(res.data.results);
    }
    fetchData();
  }, [search, page]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Stack spacing={4}>
        <div>
          <Autocomplete
            id="search_freesolo"
            freeSolo
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            autoHighlight
            options={albums.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                autoFocus={true}
                placeholder="Search for an album or artist here ..."
                margin="normal"
                variant="outlined"
                onChange={handleChange}
              />
            )}
          />
        </div>
        <div>
          <Grid
            container
            spacing={2}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ width: '100%' }}
          >
            {albums.map((album) => (
              <Grid item key={album.id} height="600">
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={album.cover_image}
                      height="300"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      {album.title}
                    </Typography>
                    <Typography variant="span" color="text.secondary">
                      {album.genre &&
                        album.genre.map((genre, index) => (
                          <p key={index}>{genre}</p>
                        ))}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {album.style &&
                        album.style.map((style, index) => (
                          <p key={index}>{style}</p>
                        ))}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <a href={`${urlDiscogs}${album.id}`}>view on Discogs </a>
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button variant="contained" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default AutocompleteMUI;
