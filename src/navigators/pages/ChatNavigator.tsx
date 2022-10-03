import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constants/screens';
import { ChatListScreen } from '../../screens/ChatListScreen/ChatListScreen';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.ChatList} component={ChatListScreen} />
        </Stack.Navigator>
    )
};

export default ChatNavigator;