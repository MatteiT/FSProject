import React from 'react';
import {useEffect} from 'react';
import { Stack } from '@mui/system';
import { connect, useDispatch, useSelector} from 'react-redux';
import { fetchAlbums, setPage, setSearch} from '../features/AppSlice';
import AlbumsCards from './AlbumsCards';
import Pagination from './Pagination';
import SearchAuto from './SearchAuto';
import ClickModal from './ClickModal';
import { Box } from '@mui/material';


const Search = () => {
  const dispatch = useDispatch();
  const { albums, isLoading, error, search, page } = useSelector((state) => state.app);
  console.log(albums);
  console.log(search);


  useEffect(() => {
    dispatch(fetchAlbums(search, page));
  }, [dispatch, search, page]);


  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };


  return (
    <>
    <Stack direction="row" spacing={2}>
      <Box sx={{ flexGrow: 1 }}>
      <SearchAuto onChange={onChange}/>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error ? <div>{error}</div> : null}
      {!isLoading && !error ?  <AlbumsCards/>: null }
      <Pagination  />
      </Box>
    </Stack>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.app.albums,
    isLoading: state.app.isLoading,
    error: state.app.error,
    search: state.app.search,
    page: state.app.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    setSearch: (search) => dispatch(setSearch(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);






