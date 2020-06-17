import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Icon } from 'native-base';
 
export default class Doorlock extends Component {
     render() {
        return (
            <View style={styles.container}>
                <View style={styles.BottomContainer}>
                    <Text style={styles.fontStyle}>집에 뭐가 Need?</Text>
                    <Text style={styles.fontStyle}>가족과 함께하는 Talk!</Text>
                    <Text style={styles.fontStyle}>우리집 문은 Unlock</Text>
                    <Text style={styles.fontStyle}>세탁기 돌리는 Control</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontStyle:{
        fontSize: 24,
        color:"#7E8F7C",
        marginBottom: 4
    },
    TopContainer:{
        flex:3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomContainer:{
        flex:7,
        alignItems: 'center',
        justifyContent: 'center',
    }
});