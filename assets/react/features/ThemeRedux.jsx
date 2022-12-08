
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkmode: false,
        light: {
            palette: {
                mode: 'light',
                primary: {
                    main: '#3f51b5',
                },
                secondary: {
                    main: '#f50057',
                },
            },
        },
        dark: {
            palette: {
                mode: 'dark',
                primary: {
                    main: '#3f51b5',
                },
                secondary: {
                    main: '#f50057',
                },
            },
        },
    },
    reducers: {
        setDarkmode: (state, action) => {
            state.darkmode = action.payload;
        }
    },
});

export const { setDarkmode } = themeSlice.actions;

export default themeSlice.reducer;

