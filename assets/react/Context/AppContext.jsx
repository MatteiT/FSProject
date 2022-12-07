import React from 'react'
import { useState, createContext, useContext  } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Paper } from '@mui/material'

export const AppContext = createContext()

    export const AppProvider = ({ children }) => {
        const [darkmode, setDarkmode] = useState(false)
        const [loading, setLoading] = useState(false);
        const [search, setSearch] = useState('');
        const [error, setError] = useState(false);
        const [page, setPage] = useState(1);

    const theme = createTheme({
        palette: {
            mode: darkmode ? 'dark' : 'light',
            primary: {
                main: '#d01110'
            },
            secondary: {
                main: '#f57c00',
            },
            error: {
                main: '#19857b',
            },
            background: {
                default: darkmode ? '#0a0a00' : '#fff',           },
            typography: {
                fontFamily: 'Lora',
                fontSize: 14,
                fontWeightLight: 300,
                fontWeightRegular: 400,
                fontWeightMedium: 500,
                fontWeightBold: 700,
            },
        },
        props: {
            MuiList: {
                dense: true,
            },
            MuiMenuItem: {
                dense: true,
            },
            MuiTable: {
                size: 'small',
            },
            },
    })


    return (
        <AppContext.Provider value={[darkmode, setDarkmode, loading, setLoading, search, setSearch, error, setError, page, setPage]}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Paper
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {children}
                </Paper>
            </ThemeProvider>
        </AppContext.Provider>
    )
}



export const useAppContext = () => {
    return useContext(AppContext)
}


