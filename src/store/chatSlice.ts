import { faker } from '@faker-js/faker';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface IUser {
    id: string;
    name: string;
    avatar: string;
}

export interface IMessage {
    id: number;
    text: string;
    createdAt: Date;
    userId: string;
}

export interface IChat {
    id: string;
    messages: IMessage[]
    placeholder: string;
    user: IUser;
}

interface IChatState {
    isFetching: boolean;
    chats: IChat[];
}

export const generationUser = (): IUser => {
    return {
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        avatar: faker.image.avatar(),
    }
}

const generationMockMessages = (): IMessage[] => {
    return new Array(20).fill(null).map((_, index) => {
        return {
            id: index,
            text: faker.lorem.paragraph(),
            createdAt: faker.date.past(),
            userId: faker.datatype.uuid()
        }
    });
}

const generationMockChats = (): IChat[] => {
    return new Array(20).fill(null).map(_ => {
        return {
            placeholder: faker.lorem.paragraph(),
            messages: generationMockMessages(),
            id: faker.datatype.uuid(),
            user: generationUser()
        }
    });
}

export const fetchChats = createAsyncThunk(
    'chat/fetchChats',
    async () => {
        return new Promise((resolve, reject) => {
            const MOCK_CHATS = generationMockChats();
            setTimeout(() => {
                resolve(MOCK_CHATS);
            }, 500);
        });
    }
)



const initialState: IChatState = {
    chats: [],
    isFetching: false
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        chatFetching: (state) => {
            state.isFetching = true;
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchChats.fulfilled, (state, action: any) => {
            state.chats = action.payload;
            state.isFetching = false;
        })
    },
});

export const { chatFetching } = chatSlice.actions;
export const selectChats = (state: RootState) => state.chat.chats;

export default chatSlice.reducer;