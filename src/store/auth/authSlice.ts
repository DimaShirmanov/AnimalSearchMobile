import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthState {
    isAuthorization: boolean;
};

const initialState: AuthState = {
    isAuthorization: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuthorization = true;
        },
        signOut: (state) => {
            state.isAuthorization = false;
        }
    },
})

export const { signIn, signOut } = authSlice.actions

export const selectIsAuthorization = (state: RootState) => state.auth.isAuthorization;

export default authSlice.reducer