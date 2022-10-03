import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../constants/screens';
import HomeNavigator from './pages/HomeNavigator';

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
        </TabsNavigator.Navigator>
    );
}

export default Tabs;