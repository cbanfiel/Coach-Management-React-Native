import React from 'react';
import {Text, ActivityIndicator, View, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
export default class LoadingScreen extends React.Component{

    defaultFonts(){
        const customTextProps = {
          style: {
            fontFamily: 'titillium-web'
          }
        }
        setCustomTextInput(customTextProps);
        setCustomText(customTextProps);
      }

    async componentDidMount(){
        await Font.loadAsync({
            'titillium-web': require('../assets/fonts/TitilliumWeb-Regular.ttf')
          }).then(() =>{
              this.defaultFonts();
          });

        firebase.auth().onAuthStateChanged(user => {
            console.log(user);
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }


  render(){

  return (
      <View style={styles.container}>
          <Text>Loading...</Text>
          <ActivityIndicator size="large"></ActivityIndicator>
      </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
      padding: 10
    },
  });

