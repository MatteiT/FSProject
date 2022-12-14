// create a slice for the collection feature with the api controller and the reducer 

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCollection = createAsyncThunk('collection/fetchCollection', async (collectionName) => {
    const response = await axios.get(`http://localhost:8000/api/collection/${collectionName}`)
    return response.data
})

export const addCollection = createAsyncThunk('collection/addCollection', async (collectionName) => {
    const response = await axios.post(`http://localhost:8000/api/collection/${collectionName}`)
    return response.data
} )

export const addAlbumToCollection = createAsyncThunk('collection/addAlbumToCollection', async (album, collectionName) => {
    const response = await axios.post(`http://localhost:8000/api/collection/${collectionName}`, album)
    return response.data
} )

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collection: [],
        isLoading: false,
        hasErrors: false,
    },
    reducers: {
        setCollection: (state, action) => {
            state.collection = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollection.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCollection.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasErrors = false
                state.collection = action.payload
            })
            .addCase(fetchCollection.rejected, (state) => {
                state.isLoading = false
                state.hasErrors = true
            })
    }
})

export const { setCollection } = collectionSlice.actions

export const collectionSelector = (state) => state.collection

export default collectionSlice.reducer


