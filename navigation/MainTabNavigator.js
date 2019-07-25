import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen
}, {
    defaultNavigationOptions: {
        title: 'Total Expenditures'
    }
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Budget',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-wallet' : 'md-wallet'}
        />
    ),
};

const LinksStack = createStackNavigator({
    Links: LinksScreen
}, {
    defaultNavigationOptions: {
        title: 'Receipts'
    }
});

LinksStack.navigationOptions = {
    tabBarLabel: 'Receipts',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
}, {
    defaultNavigationOptions: {
        title: 'Settings'
    }
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    SettingsStack,
});
