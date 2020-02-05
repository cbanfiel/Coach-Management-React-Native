import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from '../scenes/Home';
import Management from '../scenes/Management';
import Roster from '../scenes/Roster';
import Login from '../scenes/Login';
import LoadingScreen from '../scenes/LoadingScreen';
import * as firebase from 'firebase';
import Register from '../scenes/Register';

const config = require('../config');
  // Initialize Firebase
  firebase.initializeApp(config.firebase);
  // firebase.analytics();


const AppStack= createStackNavigator({
    Home: {
        screen: Home
    },
    Management:{
        screen: Management
    },
    Roster:{
        screen: Roster
    }
});

const AuthStack= createStackNavigator({
    Login: Login,
    Register: Register
})

export default createAppContainer(

    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )

);