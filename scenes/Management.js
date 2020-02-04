import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Management extends React.Component{
  render(){

  return (
    <View style={styles.container}>
    <Button title={'Roster'} onPress={()=>this.props.navigation.navigate('Roster')}></Button>
    <Button title={'Coaches'}></Button>
    <Button title={'Send Message'}></Button>
    <Button title={'Schedule'}></Button>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:50,
    flexDirection:'row',
    alignItems:'center',
    flexDirection:'column'
  },
});
