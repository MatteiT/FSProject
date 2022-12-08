import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false,
        search: 'Daft Punk',
        error: false,
        page: 1,
        albums: [],
        hoover: false,
        modal: false,

    },  
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
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
        setModal: (state, action) => {
            state.modal = action.payload
        },
    },
})


export const { setLoading, setSearch, setError, setPage, setAlbums, setHoover  } = appSlice.actions

export default appSlice.reducer








