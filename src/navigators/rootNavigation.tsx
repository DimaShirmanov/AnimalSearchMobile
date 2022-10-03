import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../constants/screens';
import { LoginScreen } from '../screens/Login/LoginScreen';
import Tabs from './tabs';
import { useAppSelector } from '../hooks/storeHooks';
import { selectIsAuthorization } from '../store/auth/authSlice';

const RootStack = createNativeStackNavigator();

const defaultStackOptions = {
    headerShown: false,
};

const RootNavigation = () => {
    const isAuthorization = useAppSelector(selectIsAuthorization);

    return (
        <RootStack.Navigator screenOptions={defaultStackOptions}>
            {
                !isAuthorization ? <RootStack.Screen name={screens.Login} component={LoginScreen} /> : <RootStack.Screen name={screens.MainScreens} component={Tabs} />
            }

        </RootStack.Navigator>
    );
}

export default RootNavigation;