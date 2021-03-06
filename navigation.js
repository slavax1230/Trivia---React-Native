import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import Quiz1Screen from './screens/quiz1';
import Quiz0Screen from './screens/quiz0';
import EndScreen from './screens/end';
import EndGoodScreen from './screens/endGood'

//3
const StackNavigator = createStackNavigator();
export const AppNav = () => {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name='Home' component={HomeScreen} />
            <StackNavigator.Screen name='Quiz1' component={Quiz1Screen} />
            <StackNavigator.Screen name='Quiz0' component={Quiz0Screen} />
            <StackNavigator.Screen name='End' component={EndScreen} />
            <StackNavigator.Screen name='EndGood' component={EndGoodScreen} />

        </StackNavigator.Navigator>
    )
}


