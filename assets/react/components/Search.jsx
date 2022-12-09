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
  const {albums, search, isLoading, page, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [ dispatch, search, page ]);

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
          {albums.map((album) => {
            <SearchAuto albums={albums} onChange={onChange}  />
            return(
              <>
            <AlbumsCards key={album.id} album={album} />
          <ClickModal key={album.id} album={album} />
          </>)}
          )}
          <Pagination page={page} setPage={setPage} />
    </Stack>
    </>
  );
};







