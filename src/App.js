/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
