import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TabReeditScreen} from './TabReeditScreen';

const Tab = createBottomTabNavigator();
export function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="New" component={TabReeditScreen} />
      <Tab.Screen name="Top" component={TabReeditScreen} />
      <Tab.Screen name="Hot" component={TabReeditScreen} />
      <Tab.Screen name="Controversial" component={TabReeditScreen} />
    </Tab.Navigator>
  );
}
