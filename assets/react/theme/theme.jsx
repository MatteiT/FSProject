
import { createTheme } from '@material-ui/core/styles';

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

export default theme;

