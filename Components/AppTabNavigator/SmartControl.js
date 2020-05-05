import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'native-base';
 
export default class SmartControl extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='git-branch' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <View >
                        <Image style={{ width: 140, height: 120 }} source={require('../../assets/image/Airconditioner.jpeg')} />
                    </View>
                    <View >
                        <Image style={{ width: 100, height: 160}} source={require('../../assets/image/bulb.jpeg')} />
                    </View>
                </View>
                <View style={styles.MidContainer}>
                    <View >
                        <Image style={{ width: 110, height: 150}} source={require('../../assets/image/doorlock.jpeg')} />
                    </View>
                    <View>
                        <Image style={{ width: 100, height: 150}} source={require('../../assets/image/Boiler.jpeg')} />
                    </View>
                </View>
                <View style={styles.Botcontainer}>
                    <View >
                        <Image style={{ width: 160, height: 160 }} source={require('../../assets/image/Ricecooker.jpeg')} />
                    </View>
                    <View >
                        <Image style={{ width: 120, height: 160 }} source={require('../../assets/image/washingmachine.jpeg')} />
                    </View>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    TopContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    MidContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    Botcontainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }
});