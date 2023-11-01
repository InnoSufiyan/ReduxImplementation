import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './Slices/usersReducer'
import userReducer from './Slices/userReducer'
import themeReducer from './Slices/themeReducer'
import authReducer from './Slices/authSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        users: usersReducer,
        auth: authReducer
    },

},
    +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)