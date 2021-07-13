import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './screens/Home';
import Shopping from './screens/Shopping';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Shopping" component={Shopping} />
      </Tab.Navigator>
    );
}