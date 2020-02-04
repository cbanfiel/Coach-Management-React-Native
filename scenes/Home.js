import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TeamCard from '../components/TeamCard';
import NewTeamCard from '../components/NewTeamCard';


export default class Home extends React.Component{
  render(){

  return (
    <View style={styles.container}>
      <TeamCard name={'Eastern Michigan Softball'} onPress={()=>{this.props.navigation.navigate('Management')}}/>
      <NewTeamCard></NewTeamCard>
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
    justifyContent:'center'
  },
});
