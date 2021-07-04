import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        headerMode="none" // remove o header do navigator
        screenOptions={{ // remove o bckground do navigator
            cardStyle: {
                backgroundColor: 'transparent'
            }
        }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}