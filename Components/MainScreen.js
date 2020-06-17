import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from './AppTabNavigator/Home';
import Weather from './AppTabNavigator/Weather/Weather';
import SmartControl from './AppTabNavigator/Control/SmartControl';
import ToDo from './AppTabNavigator/ToDo/ToDo';
import Setting from './AppTabNavigator/Setting';

import { Font } from 'expo';
import { Icon } from 'native-base';



const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    ToDo: {
        screen: ToDo
    },
    SmartControl: {
        screen: SmartControl
    },
    ToDo: {
        screen: ToDo
    },
     Weather: {
        screen: Weather
    },
     Setting: {
        screen: Setting
    }
});
const App = createAppContainer(AppTabNavigator);


// const main = createStackNavigator({ //이동할 페이지들 리스트 
//     MyPage: {
//         screen: MyPage
//     },
//     FamilyChat: {
//         screen: FamilyChat
//     },
// });
// const App2 = createAppContainer(main);



export default class MainScreen extends Component {
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
    static navigationOptions =({navigation})=> {
        return{
            headerLeft: () => (<Icon name='md-person' onPress={() => navigation.navigate("MyPage")} style={{ paddingLeft: 15 }} />),
            headerTitle: () => (
                <View>
                    <Text style={{fontSize: 20,color:"#ED1935"}}>
                        Mirror Class
                    </Text>
                </View>),
            headerRight: ()=>(<Icon name='md-chatboxes' onPress={() => navigation.navigate("FamilyChat")} style={{paddingRight:15}} />)    
        }
    }
 
    render(){
        return (
            <App/>
        );
    }

}
 

