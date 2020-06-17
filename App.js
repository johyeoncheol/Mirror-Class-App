import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Components/MainScreen';
import LoginScreen from './Components/loginScreen';
import FamilyChat from './Components/AppTabNavigator/FamilyChat';
import MyPage from './Components/AppTabNavigator/Mypage';
import Airconditioner from './Components/AppTabNavigator/Control/Airconditioner';
import Boiler from './Components/AppTabNavigator/Control/Boiler';
import Bulb from './Components/AppTabNavigator/Control/Bulb';
import Doorlock from './Components/AppTabNavigator/Control/Doorlock';
import Ricecooker from './Components/AppTabNavigator/Control/Ricecooker';
import Washingmachine from './Components/AppTabNavigator/Control/Washingmachine';

// StackNavigator 를 App에 추가하기
const AppStackNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    MainScreen: {
      screen: MainScreen
    },
    MyPage: {
      screen: MyPage
    },
    FamilyChat: {
      screen: FamilyChat
    },
    Airconditioner: {
      screen: Airconditioner
    },
    Boiler: {
      screen: Boiler
    },
    Bulb: {
      screen: Bulb
    },
    Doorlock: {
      screen: Doorlock
    },
    Ricecooker: {
      screen: Ricecooker
    },
    Washingmachine: {
      screen: Washingmachine
    }
  }
  
);

export default createAppContainer(AppStackNavigator);

