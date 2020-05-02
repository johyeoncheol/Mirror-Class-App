import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
 
export default class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' style={{ color: tintColor }} />
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <Text>TopHomeTab</Text>
                </View>
                <View style={styles.BottomContainer}>
                    <Text>BottomHomeTab</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TopContainer:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BottomContainer:{
        flex:7,
        alignItems: 'center',
        justifyContent: 'center'
    }
});