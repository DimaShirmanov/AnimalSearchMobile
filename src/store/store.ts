import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import mapReducer from './mapSlice';
import chatReducer from './chatSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        map: mapReducer,
        chat: chatReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;