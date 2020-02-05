import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component{

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }


  render(){

  return (
      <View>
          <Text>Loading...</Text>
          <ActivityIndicator size="large"></ActivityIndicator>
      </View>
  );
  }
}

