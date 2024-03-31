import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    user: null,
    token: null,
    error: '',
    userLocation: ''
};

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        loginPending: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.error = '';
        },
        loginFailed: (state, { payload }) => {
            console.log(payload, "===>>> payload in reducer")
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.error = payload.message;
        },
        loginRefresh: (state, { payload }) => {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.error = '';
            state.userLocation = ''
        },
        signupPending: (state) => {
            state.isLoading = true;
        },
        signupSuccess: (state, { payload }) => {
            state.isLoading = false;
        },
        signupFailed: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload.message;
        },
    },
});

const { reducer, actions } = AuthSlice;

export const {
    loginPending,
    loginSuccess,
    loginFailed,
    loginRefresh,
    signupPending,
    signupSuccess,
    signupFailed,
} = actions;

export default reducer;