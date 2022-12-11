
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const ClickModal = () => {
const [isOpen, setIsOpen] = useState(false);
const { album } = useSelector((state) => state.app);


const handleClose = () => setIsOpen(false);

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
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {album.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.artist.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.release_date}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.label}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.genre}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.style}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.country}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {album.format}
            </Typography>
        </Box>
    </Modal>
</div>
);
};

export default ClickModal;
