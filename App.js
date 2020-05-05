import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/loginScreen';

// StackNavigator 를 App에 추가하기
const AppStackNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    TabNavigator: {
      screen: MainScreen
    }
  }
);

export default createAppContainer(AppStackNavigator);


