import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
 
export default class FamilyChat extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='md-contacts' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={style.container}>
                <Text>개발중에 있습니다.</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});