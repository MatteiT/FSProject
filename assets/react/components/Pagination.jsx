
import React from 'react';
import {Box, Button} from '@mui/material';

const Pagination = ({page, setPage}) => {

return (
    <>
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
    </>
    );    
} 

export default Pagination;
