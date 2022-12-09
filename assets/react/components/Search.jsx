import React from 'react';
import {useEffect} from 'react';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums, setPage, setSearch} from '../features/AppSlice';
import AlbumsCards from './AlbumsCards';
import Pagination from './Pagination';
import SearchAuto from './SearchAuto';
import ClickModal from './ClickModal';


const Search = () => {
  const dispatch = useDispatch();
  const {albums, search, isLoading, page } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

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

  return (

    <>
    <Stack direction="row" spacing={2}>
          {albums.map((album) => {
            return(
              <>
              <SearchAuto albums={albums} onChange={onChange}  />
            <AlbumsCards key={album.id} album={album} />
          <ClickModal key={album.id} album={album} />
          </>)}
          )}
          <Pagination page={page} setPage={setPage} />
    </Stack>
    </>
  );
};

export default Search;

