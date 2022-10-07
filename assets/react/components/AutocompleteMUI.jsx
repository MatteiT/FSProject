import React from 'react';
import Slider from './Slider';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import axios from 'axios';
import { Stack } from '@mui/system';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import AudiotrackSharpIcon from '@mui/icons-material/AudiotrackSharp';
import {
  CardActionArea,
  CardMedia,
  Chip,
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
                variant="outlined"
                onChange={handleChange}
              />
            )}
          />

        {/* <Slider  /> */}
        <section>
          <Grid container spacing={2}>


            {albums.map((album) => (
              <Grid item key={album.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={album.cover_image}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      {album.title}
                    </Typography>
                    <Typography variant="span" color="text.secondary">
                      {album.genre &&
                        album.genre.map((genre, index) => (
                          <Chip key={index} label={genre} icon={<AudiotrackSharpIcon/> }/>
                        ))}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {album.style &&
                        album.style.map((style, index) => (
                          <Chip key={index} size="small" label={style} icon={<SellSharpIcon/>} />
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
        </section >
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
