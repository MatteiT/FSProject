import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setModal } from '../features/AppSlice';

const ClickModal  = ({ album }) => {

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal(false));
  };

  
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    };

return (
<div>
    <Modal
    open={album.modal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        {album.title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {album.artist}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {album.year}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {album.genre}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {album.cover_image}
        </Typography>
        <Button onClick={handleClose}>Close</Button>
    </Box>
    </Modal>
</div>
);
};

export default ClickModal;
