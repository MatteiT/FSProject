
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice'
import theme from './themeSlice'


const ReduxStore = configureStore({
    reducer: {
        app: appReducer,
        theme,
    },
})

export default ReduxStore


