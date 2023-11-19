import { configureStore } from "@reduxjs/toolkit"
import customerReducer from '../redux/reducers'

export const store = configureStore({
    reducer: customerReducer,
})
