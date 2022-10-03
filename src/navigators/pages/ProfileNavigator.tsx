import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../constants/screens';
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screens.Profile} component={ProfileScreen} />
        </Stack.Navigator>
    )
};

export default ProfileNavigator;