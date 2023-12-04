import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';
import { StatusBar } from 'react-native';
import User from '../screens/User';
import SpliteTheBill from '../screens/SplitTheBill';
import SplitTheBill from '../screens/SplitTheBill';
const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor='#FFFFFF' />
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="User"
                    component={User}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SplitTheBill"
                    component={SplitTheBill}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
