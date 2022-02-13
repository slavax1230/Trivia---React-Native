import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import Quiz1Screen from './screens/quiz1';
import Quiz0Screen from './screens/quiz0';
import EndScreen from './screens/end';


//3
const StackNavigator = createStackNavigator();
export const AppNav = () => {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen options={{headerShown: false}} name='Home' component={HomeScreen} />
            <StackNavigator.Screen options={{headerShown: false}} name='Quiz1' component={Quiz1Screen} />
            <StackNavigator.Screen options={{headerShown: false}} name='Quiz0' component={Quiz0Screen} />
        </StackNavigator.Navigator>
    )
}
const StackNavigator2 = createStackNavigator();
export const AppNav2 = () => {
    return(
        <StackNavigator.Navigator>
            <StackNavigator.Screen name='End' component={EndScreen} />
        </StackNavigator.Navigator>
    )
}


