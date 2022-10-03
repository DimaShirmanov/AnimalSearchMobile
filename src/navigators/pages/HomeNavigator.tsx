import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constants/screens';
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.Home} component={HomeScreen} />
        </Stack.Navigator>
    )
};

export default HomeNavigator;