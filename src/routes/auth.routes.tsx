import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { Home } from '../screens/Home';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
        headerMode="none" // remove o header do navigator
        screenOptions={{ // remove o bckground do navigator
            cardStyle: {
                backgroundColor: theme.colors.secondary100
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
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
        </Navigator>
    )
}