import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Loading from "./Loading";
import { Icon } from 'native-base';
import * as Location from "expo-location";
import axios from "axios";
import Weatherinfo from './Weatherinfo';

const API_KEY = "e23495acc3953ab1a95da0be5d4731d1";
export default class Weather extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='cloudy' style={{ color: tintColor }} />
        )
    }
    state = {
        isLoading: true
      };

    getWeather = async (latitude, longitud) => {
    const { 
        data:{
          main : {temp},
          weather
        } 
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitud}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: weather[0].main,
        temp
      });
    };

    getLocation = async () => {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords : {latitude,longitude}
        } = await Location.getCurrentPositionAsync();
        this.getWeather(latitude,longitude);
      } 
      catch (error) {
        Alert.alert("Can't find you.","So sad");
      }
    };

    componentDidMount(){
      this.getLocation();
    }

    render(){
      const {isLoading,temp,condition} = this.state;
      return isLoading ? <Loading/> : <Weatherinfo temp={Math.round(temp)} condition={condition}/>;
    }
}

