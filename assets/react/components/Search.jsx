import React from 'react';
import {useEffect} from 'react';
import { Stack } from '@mui/system';
import { useDispatch, useSelector} from 'react-redux';
import { fetchAlbums, setPage, setSearch} from '../features/AppSlice';
import AlbumsCards from './AlbumsCards';
import Pagination from './Pagination';
import SearchAuto from './SearchAuto';
import ClickModal from './ClickModal';

export default Search = () => {
  const dispatch = useDispatch();
  // const {albums, search, isLoading, page, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [ dispatch, state.app.search, app.state.page ]);

  const onChange = (e) => {
    dispatch(setSearch(e.target.value));
  };


  if (isLoading) {
    return (
      <>
      <SearchAuto />
      <div>Loading...</div>;
      </>
    );
  }

  if(error) {
    return (
      <>
      <SearchAuto />
      <div>Something went wrong...</div>;
      </>
    );
  }


  return (
    <>
    <Stack direction="row" spacing={2}>
      <SearchAuto albums={albums} onChange={onChange}  />
          {this.props.albums.map((album) => (
            <>
            <ClickModal key={album.id}/>
            <AlbumsCards key={album.id}/>
            </>
          ))}
          <Pagination/>
    </Stack>
    </>
  );
};







