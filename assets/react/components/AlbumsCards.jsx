import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box, Chip, Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../features/ModalSlice';
import ClickModal from './ClickModal';



export const AlbumsCards = () => {
    const urlDiscogs = 'https://www.discogs.com';
    const {albums}  = useSelector((state) => state.app);

        const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();
    const handleModal = (album) => dispatch(setModal(album));


    return (
        <>
      <section className="results">
            <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={0.5} justifyContent="center" alignItems="center">
            {albums &&
              albums.map((album) => (
            <Card 
                key={album.id}
                variant='outlined'
                height='300px' 
                width='300px'
                sx={{ maxWidth: 345, maxHeight: 345, minWidth: 345, minHeight: 345, margin: 1, padding: 1, display: 'flex', flexDirection: 'column', justifyContent:'space-between' }}>
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
                        <Chip key={index} size="small" label={genre}/>
                        ))}
                    {album.style &&
                        album.style.map((style, index) => (
                        <Chip key={index} size="small" label={style}  />
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
                    <Button variant="contained" size='small'
                    >
                    <a href={`${urlDiscogs}${album.uri}`}target="_blank" rel="noreferrer">view on Discogs</a>
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleModal(album)}
                  >
                      View Details
                  </Button>
                    <br/> 
                    <Button  variant="contained"  size='small' color="error"  >Add </Button>
                    <Button variant="contained"  size='small' >Delete</Button> 
                    </Box>
                </Card>
              ))}
              <ClickModal />
          </Grid>
        </Box>
      </section>
    </>
    );
};

export default AlbumsCards;

