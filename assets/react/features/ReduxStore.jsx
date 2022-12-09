
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice'
import theme from './themeSlice'
import modalreducer from './ModalSlice'


const ReduxStore = configureStore({
    reducer: {
        app: appReducer,
        theme,
        modal: modalreducer
    },
})

export default ReduxStore


