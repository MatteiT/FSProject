import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAlbums = createAsyncThunk('app/fetchAlbums', async (search, page) => {
    const response = await axios.get(`https://api.discogs.com/database/search?q=${search}&token=qALItICfHYUDyaIegejpMxJlRDjVmjxBxfkwgbCi&page=${page}`)
    return response.data.results
})


const appSlice = createSlice({
    name: 'app',
    initialState: {
        search: 'Daft Punk',
        page: 1,
        albums: [],
        id:null,
        hoover: false,
        isLoading: false,
        hasErrors: false,
    },  
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setAlbums: (state, action) => {
            state.albums = action.payload
        },
        setHoover: (state, action) => {
            state.hoover = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAlbums.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasErrors = false
                state.albums = action.payload
            })
            .addCase(fetchAlbums.rejected, (state) => {
                state.isLoading = false
                state.hasErrors = true
            })
    }
})

export const { setSearch, setPage, setAlbums, setHoover, setId } = appSlice.actions

export const appSelector = (state) => state.app

export default appSlice.reducer










