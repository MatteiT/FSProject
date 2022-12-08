import { createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false,
        search: '',
        error: false,
        page: 1,
        albums: [],
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
        }
    },
})

export const { setLoading, setSearch, setError, setPage, setAlbums } = appSlice.actions

export default appSlice.reducer








