import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const parents = [{
  name: 'mom'
},
{
  name: 'dad'
}];

const players=[
  {name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'},
];


export default class Management extends React.Component{
  render(){

  return (
    <View style={styles.container}>
    <Button title={'Roster'} onPress={()=>this.props.navigation.navigate('Roster', {list:players})}></Button>
    <Button title={'Coaches'} onPress={()=>this.props.navigation.navigate('Roster', {list:players})}></Button>
    <Button title={'Parents'} onPress={()=>this.props.navigation.navigate('Roster', {list: parents})}></Button>
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
