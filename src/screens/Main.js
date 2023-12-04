import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import COLORS from "../cmpntns/Color";
import Home from "../bottom/Home";
import Icon from 'react-native-vector-icons/Ionicons';
import Statistics from "../bottom/Statistics";
import Earnings from "../bottom/Earnings";
import Accounts from "../bottom/Accounts";


const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.cream
                },
                tabBarActiveTintColor: "#B06533",
                tabBarInactiveTintColor: "black",
                tabBarItemStyle: {
                    marginTop: 5,
                },
            }}
        >
            <Tab.Screen
                name="Home" style={{}}
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            style={{ alignSelf: 'center' }}
                            name='home'
                            color="#000"
                            size={23}
                        />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: "Helvetica"
                    },
                }}
            />
            <Tab.Screen
                name="Earnings"
                component={Earnings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            style={{ alignSelf: 'center' }}
                            name='earth-outline'
                            color="#000"
                            size={23}
                        />),
                    tabBarLabelStyle: {
                        fontFamily: "Helvetica"
                    },
                }}
            />
            <Tab.Screen
                name="Statistics"
                component={Statistics}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            style={{ alignSelf: 'center' }}
                            name='stats-chart'
                            color="#000"
                            size={23}
                        />),
                    tabBarLabelStyle: {
                        fontFamily: "Helvetica"
                    },
                }}
            />
            <Tab.Screen
                name="Accounts"
                component={Accounts}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }} source={require('../../Assets/pic/accounts.png')} />
                    ),
                    tabBarLabelStyle: {
                        fontFamily: "Helvetica"
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default Main;
