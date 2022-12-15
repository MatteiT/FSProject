
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './AppSlice'
import theme from './themeSlice'
import modalreducer from './ModalSlice'
import authreducer from './AuthSlice'

const ReduxStore = configureStore({
    reducer: {
        app: appReducer,
        theme,
        modal: modalreducer,
        auth: authreducer,
    },
})

export default ReduxStore


