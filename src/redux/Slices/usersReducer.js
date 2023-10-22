import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: '',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersPending: (state) => {
            state.loading = true
        },
        getUsersSuccess: (state, { payload }) => {
            state.users = payload
            state.loading = false
            state.error = ''
        },
        getUsersFailure: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

const { actions, reducer } = usersSlice

export const { getUsersPending, getUsersSuccess, getUsersFailure } = actions

export default reducer