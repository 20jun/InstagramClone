import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

// Stack Navigator : 새로운 스크린으로 이동하기 위해 사용(스택 쌓기)
const RootStack = createStackNavigator(); 

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen 
    name = {'Home'} 
    component = {BottomHomeNavigator}
    options = {{
      headerShown : false,
    }} />
    <RootStack.Screen 
      name = 'Story'
      component = {StoryScreen}
      options = {{
        headerShown : false,
      }}
       />
  </RootStack.Navigator>
);

export default Router;