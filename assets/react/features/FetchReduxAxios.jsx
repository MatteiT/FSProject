// create a slice of state to fetch the data from discogs api using axios and redux toolkit and redux thunk 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAlbums = createAsyncThunk(
    'app/fetchAlbums',
    async (search, page) => {
        const response = await axios.get(
            `https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`
        );
        return response.data.results;
    }
);

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        albums: [],
        loading: false,
        error: false,
    },
    reducers: {
        setAlbums: (state, action) => {
            state.albums = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.loading = false;
            state.albums = action.payload;
        });
        builder.addCase(fetchAlbums.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const { setAlbums } = fetchSlice.actions;


export default fetchSlice.reducer;

