import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

export default class LoginScreen extends Component{
    
    _doLogin(){
        this.props.navigation.replace('TabNavigator')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Mirror Class</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput 
                        style={styles.textForm} 
                        placeholder={"NickName"}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this._doLogin.bind(this)}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: widthPercentageToDP('10%'),
        paddingRight: widthPercentageToDP('10%'),
        justifyContent: 'center',
    },
    titleArea: {
        width: '100%',
        height: '30%',
        padding: widthPercentageToDP('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: widthPercentageToDP('10%'),
        color:"#54EE4E"
    },
    formArea: {
        width: '100%',
        paddingBottom: widthPercentageToDP('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: heightPercentageToDP('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: heightPercentageToDP('5%'),
    },
    button: {
        backgroundColor: "#46c3ad",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})