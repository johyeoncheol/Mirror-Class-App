import React, { Component } from 'react';
import { View,Text,StyleSheet, YellowBox } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import FamilyChat from './AppTabNavigator/FamilyChat';
import Home from './AppTabNavigator/Home';
import Weather from './AppTabNavigator/Weather';
import SmartControl from './AppTabNavigator/SmartControl';
import ToDo from './AppTabNavigator/ToDo/ToDo';

import { Font } from 'expo';
import { Icon } from 'native-base';



const AppTabNavigator = createBottomTabNavigator({
    Home:{
        screen:Home
    },
    FamilyChat:{
        screen:FamilyChat
    },
    ToDo:{
        screen:ToDo
    },
    SmartControl:{
        screen:SmartControl
    },
    ToDo:{
        screen:ToDo
    },Weather:{
        screen:Weather
    }
});
const App = createAppContainer(AppTabNavigator);


class MainScreen extends Component {
    // constructor(props) {
    //     super(props);
        
    //     // 폰트로딩이 완료되면 true로 변경
    //     this.state = {isReady: false};
    //   }
    
    // async componentDidMount() {
    //     // await키워드를 붙여 비동기식으로 변경
    //     await Font.loadAsync({'Mr De Haviland': require('./assets/fonts/MrDeHaviland-Regular.ttf'),});
        
    //     // 폰트로드가 완료되어 true로 변경
    //     this.setState({ isReady: true });
    //   }
//Icon button onpress 
    static navigationOptions = {
        headerLeft: () => (<Icon name='md-person' style={{ paddingLeft: 15 }} />),
        headerTitle: () => (
            <View>
                <Text style={{fontSize: 20,color:"#698221"}}>
                    Mirror Class
                </Text>
            </View>),
        headerRight: ()=>(<Icon name='md-chatboxes' style={{paddingRight:15}} />)
    }
 
    render(){
        return (
            <App/>
        );
    }

}
 

export default MainScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: "white",
        fontSize: 30
    }
})


// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Icon } from 'native-base'; // 추가된 코드

// export default class MainScreen extends Component {
//   // navigationOptions 코드 추가
//   static navigationOptions = {
//     headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
//     title: 'Instagram',
//     headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>MainScreen</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });