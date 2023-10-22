import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Slices/usersReducer'
import userReducer from './Slices/userReducer'
import themeReducer from './Slices/themeReducer'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        users: usersReducer,
    }
})