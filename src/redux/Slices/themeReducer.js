import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
    },
})

const { actions, reducer } = themeSlice

export const { toggleTheme } = actions

export default reducer