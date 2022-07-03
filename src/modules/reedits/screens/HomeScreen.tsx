import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {RedditScreen} from './RedditScreen';

const Tab = createBottomTabNavigator();
export function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="New" component={RedditScreen} />
      <Tab.Screen name="Top" component={RedditScreen} />
      <Tab.Screen name="Hot" component={RedditScreen} />
      <Tab.Screen name="Controversial" component={RedditScreen} />
    </Tab.Navigator>
  );
}
