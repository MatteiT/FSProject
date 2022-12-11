import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Chip, Modal } from '@mui/material';
import { setModal } from '../features/ModalSlice';
import { useSelector, useDispatch } from 'react-redux';

function ClickModal() {
    const dispatch = useDispatch();
    const { modal } = useSelector((state) => state.modal);
    const handleClose = () => dispatch(setModal(null));

    return (
        <Modal open={modal !== null} onClose={handleClose} showloading = {true} shift={top}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
                <Typography variant="h6" component="h2">
                    {modal && modal.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {modal && modal.artists}
                </Typography>
                <Box component='img' src={modal && modal.cover_image} alt={modal && modal.title}  
                width='50%' height='50%' fit = 'contain' 

                />
                <Typography variant="body2" color="text.secondary">
                    {modal && modal.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {modal && modal.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {modal && modal.country}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    {modal && modal.genre &&
                        modal.genre.map((genre, index) => (
                            <Chip key={index} size="small" label={genre} />
                        ))}
                    {modal && modal.style &&
                        modal.style.map((style, index) => (
                            <Chip key={index} size="small" label={style} />
                        ))}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" size='small'>
                        <a href={modal && modal.uri} target="_blank" rel="noreferrer">view on Discogs</a>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default ClickModal;

// Path: assets\react\components\AlbumsCards.jsx
// Compare this snippet from assets\react\components\AlbumsCards.jsx:
// import { Card, CardMedia, Typography, Box, Chip, Button, Grid } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import ClickModal from './ClickModal';
// import { setModal } from '../features/ModalSlice';
//
//
// export const AlbumsCards = () => {
//     const urlDiscogs = 'https://www.discogs.com';
//     const {albums}  = useSelector((state) => state.app);

//     // create a modal to display the album details
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const dispatch = useDispatch();
//     const handleModal = (album) => dispatch(setModal(album));

//     return (
//         <>
//         <Grid container spacing={2}>
//             {albums && albums.map((album, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                     <Card sx={{ maxWidth: 345 }}>
//                         <CardMedia
//                             component="img"
//                             height="140"
//                             image={album.thumb}
//                             alt={album.title}

//                         />
//                         <Box sx={{ p: 2 }}>
//                             <Typography variant="h6" gutterBottom>
//                                 {album.title}
//                             </Typography>
//                             <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
//                                 {album.genre &&
//                                     album.genre.map((genre, index) => (
//                                     <Chip key={index} size="small" label={genre}/>
//                                     ))}
//                                 {album.style &&
//                                     album.style.map((style, index) => (
//                                     <Chip key={index} size="small" label={style}  />
//                                     ))}
//                             </Box>
//                             <Typography variant="body1" gutterBottom>
//                                 {album.year}
//                             </Typography>

//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 href={`${urlDiscogs}${album.uri}`}
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 View on Discogs
//                             </Button>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={() => handleModal(album)}
//                             >
//                                 View Details
//                             </Button>
//                         </Box>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//         <ClickModal />
//         </>
//     );
// };



