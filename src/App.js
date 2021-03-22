/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native'

import Router from './router';


const App: () => React$Node = () => {
  return (
    // navigation tree 관리
    // 일반적으로 이 컴포넌트를 App.js에서 렌더링 함
    <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Router />
    </NavigationContainer>
  );
};

// 인증 단계 등 절차 처리
export default withAuthenticator(App);
