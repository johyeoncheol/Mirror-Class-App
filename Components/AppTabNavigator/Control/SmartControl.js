import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Button } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class SmartControl extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='git-branch' style={{ color: tintColor }} />
        )
    }
    render(){
        const {navigation} =this.props;
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Airconditioner")}>
                            <Image
                                style={{ width: widthPercentageToDP('35%'), height: heightPercentageToDP('20%') }}
                                source={require('../../../assets/image/Airconditioner.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("Bulb")}>
                            <Image
                                style={{ width: widthPercentageToDP('35%'), height: heightPercentageToDP('25%') }}
                                source={require('../../../assets/image/Bulb.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.MidContainer}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.navigate("Doorlock")}>
                            <Image
                                style={{ width: widthPercentageToDP('40%'), height: heightPercentageToDP('40%') }}
                                source={require('../../../assets/image/Doorlock.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity  onPress={() => navigation.navigate("Boiler")}>
                            <Image
                                style={{ width: widthPercentageToDP('40%'), height: heightPercentageToDP('23%') }}
                                source={require('../../../assets/image/Boiler.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Botcontainer}>
                    <View >
                        <TouchableOpacity onPress={() => navigation.navigate("Ricecooker")}>
                            <Image
                                style={{ width: widthPercentageToDP('40%'), height: heightPercentageToDP('15%') }}
                                source={require('../../../assets/image/Ricecooker.jpeg')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => navigation.navigate("Washingmachine")}>
                            <Image
                                style={{ width: widthPercentageToDP('40%'), height: heightPercentageToDP('28%') }}
                                source={require('../../../assets/image/Washingmachine.jpeg')}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    TopContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    MidContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Botcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});