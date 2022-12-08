import React from 'react';
import {useEffect} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/system';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import AudiotrackSharpIcon from '@mui/icons-material/AudiotrackSharp';
import {
  TextField,
  Button,
  Box,
  Card,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material';
import DeleteIcon  from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setAlbums, setSearch } from '../features/AppSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { albums, page, search } = useSelector((state) => state.app);
  const urlDiscogs = 'https://api.discogs.com/artists/';

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`
        );
        dispatch(setAlbums(res.data.results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [search, page]);

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
<Stack spacing={1} margin={1}>
      <section className="search">
        <Box sx={{ flexGrow: 1 }}>
          <Autocomplete
            id="search_freesolo"
            freeSolo
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            autoHighlight
            options={albums.map((album) => album.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                autoFocus={true}
                placeholder="Search for an album or artist here ..."
                variant="outlined"
                onChange={onChange}
              />
            )}
          />
        </Box>
      </section>

      <section className="results">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5} >
              {albums.map((album) => (
                <Grid item key={album.id} >
                  <Card 
                  // onMouseEnter={() => console.log(album)}
                  // onMouseLeave={() => console.log(album)}
                  variant='outlined'
                  height='300px' 
                  width='300px'
                  sx={{ maxWidth: 345, maxHeight: 345, minWidth: 345, minHeight: 345, margin: 1, padding: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <CardMedia
                        component="img"
                        image={album.cover_image}
                        height="140"width="140" 
                        alt={album.title}
                      />
                      <Typography gutterBottom variant="h5" component="div" align='center'>
                        {album.title}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
                        {album.genre &&
                          album.genre.map((genre, index) => (
                            <Chip key={index} size="small" label={genre} icon={<AudiotrackSharpIcon/> }/>
                          ))}
                        {album.style &&
                          album.style.map((style, index) => (
                            <Chip key={index} size="small" label={style} icon={<SellSharpIcon/>} />
                          ))}
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
                      <Button variant="contained" size='small' >
                        <a href={`${urlDiscogs}${album.id}`}>view on Discogs</a>
                      </Button>
                      <br/> 
                      <Button  variant="contained"  size='small' color="error" startIcon={<SaveIcon />} >Add </Button>
                      <Button variant="contained"  size='small' startIcon={<DeleteIcon /> }>Delete</Button> 
                      </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Box>
      </section>

      <section className="pagination">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => setPage(page - 1)}>
          Prev
        </Button>;
        <Button variant="contained" onClick={() => setPage(page + 1)}>
          Next
        </Button>;
      </Box>
      </section>
      </Stack>
    </>
  );
};

export default Search;
