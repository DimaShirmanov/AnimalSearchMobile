import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../constants/screens';
import HomeNavigator from './pages/HomeNavigator';
import ChatNavigator from './pages/ChatNavigator';
import ProfileNavigator from './pages/ProfileNavigator';

const TabsNavigator = createBottomTabNavigator();

const TAB_BAR_LABEL_FONT_SIZE = 10;
const TAB_BAR_ICON_SIZE = 24;

const defaultOptions = {
    headerShown: false,
    labelStyle: {
        fontSize: TAB_BAR_LABEL_FONT_SIZE,
    },
    tabStyle: {
        width: TAB_BAR_ICON_SIZE,
    },
};

const Tabs = () => {
    return (
        <TabsNavigator.Navigator screenOptions={defaultOptions}>
            <TabsNavigator.Screen name={screens.HomeRoot} component={HomeNavigator} />
            <TabsNavigator.Screen name={screens.ChatRoot} component={ChatNavigator} />
            <TabsNavigator.Screen name={screens.ProfileRoot} component={ProfileNavigator} />
        </TabsNavigator.Navigator>
    );
}

export default Tabs;