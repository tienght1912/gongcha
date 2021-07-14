import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ShoppingScreen from './screens/ShoppingScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NotifyScreen from './screens/NotifyScreen.js';
import ProflieScreen from './screens/ProflieScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            activeColor="#fff"
            barStyle={{ backgroundColor: '#dfe6e9' }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarColor:'#fdcb6e',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ShoppingScreen"
                component={ShoppingScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarColor:'#fdcb6e',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarColor:'#fdcb6e',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="favorite" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotifyScreen"
                component={NotifyScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarColor:'#fdcb6e',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProflieScreen"
                component={ProflieScreen}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarColor:'#fdcb6e',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}