// do a Card component to use un Search 

import React from 'react';
import { Card, CardMedia, Typography, Box, Chip, Button, Grid } from '@mui/material';

export const AlbumsCards = (album) => {
    const urlDiscogs = 'https://api.discogs.com/artists/';

    return (
        <>
      <section className="results">
            <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={0.5} >
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
                    <a href={`${urlDiscogs}${album.id}`}>view on Discogs</a>
                    </Button>
                    <Button variant="contained" size='small'>More</Button>
                    <br/> 
                    <Button  variant="contained"  size='small' color="error"  >Add </Button>
                    <Button variant="contained"  size='small' >Delete</Button> 
                    </Box>
                </Card>
          </Grid>
        </Box>
      </section>
    </>
    );
};

export default AlbumsCards;

