
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice'
import fetchReducer from './FetchReduxAxios'
import themeReducer from './ThemeRedux'


const ReduxStore = configureStore({
    reducer: {
        app: appReducer,
        fetch: fetchReducer,
        theme: themeReducer,
    },
})

export default ReduxStore


