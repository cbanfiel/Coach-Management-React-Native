import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from '../scenes/Home';
import Management from '../scenes/Management';
import Roster from '../scenes/Roster';
import Login from '../scenes/Login';
import LoadingScreen from '../scenes/LoadingScreen';

import * as firebase from 'firebase';
import Register from '../scenes/Register';

const firebaseConfig = {
    apiKey: "AIzaSyAHKokKwh7Feo7Ygx6judWV3V9jQ3VexHs",
    authDomain: "coach-management-1422d.firebaseapp.com",
    databaseURL: "https://coach-management-1422d.firebaseio.com",
    projectId: "coach-management-1422d",
    storageBucket: "coach-management-1422d.appspot.com",
    messagingSenderId: "463745474336",
    appId: "1:463745474336:web:85dc716a6c2d88df914145",
    measurementId: "G-LYEHNQJBPM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
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