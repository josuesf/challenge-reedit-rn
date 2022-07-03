import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../modules/reedits/screens/HomeScreen';
import {RedditDetail} from '../modules/reedits/screens/RedditDetail';

const Stack = createStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{title: 'Reedit App'}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="RedditDetail" component={RedditDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
