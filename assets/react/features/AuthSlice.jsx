// create the authentification slice usingg axios and the api routes and pass the token to the local storage

// Path: assets\react\features\AuthSlice.jsx
// Compare this snippet from assets\react\features\AuthSlice.jsx:
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    auth: false,
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload;
        },
    }
});

export const { setAuth } = authSlice.actions;

export const logIn = (email, password) => async (dispatch) => {
    try {
        const res = await axios.get('/api/user', { email, password });
        dispatch(setAuth(true));
        localStorage.setItem('token', res.data.token);
    } catch (err) {
        console.log(err);
    }
}

export const register = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('/api/user', { email, password });
        dispatch(setAuth(true));
        localStorage.setItem('token', res.data.token);
    } catch (err) {
        console.log(err);
    }
}

export const logOut = () => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        dispatch(setAuth(false));
    } catch (err) {
        console.log(err);
    }
}

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;


