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
    dispatch(fetchAlbums());
  }, [dispatch, search, page]);


  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };


  if (isLoading) {
    return (
      <>
      <SearchAuto onChange={onChange} />
      <div>Loading...</div>;
      </>
    );
  }

  if(error) {
    return (
      <>
      <SearchAuto onChange={onChange} />
      <div>Something went wrong...</div>;
      </>
    );
  }

  return (
    <>
    <Stack direction="row" spacing={2}>
      <Box sx={{ flexGrow: 1 }}>
      <SearchAuto onChange={onChange}/>
        {albums.map((album) => {
          <ClickModal key={album.id} album={album}/>;
          <AlbumsCards key={album.id} album={album} />;
        })}
      <Pagination page={page} setPage={setPage} margin={3} />
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






