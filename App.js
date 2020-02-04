import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TeamCard from './components/TeamCard';
import NewTeamCard from './components/NewTeamCard';
import Navigator from './routes/homeStack';


export default class App extends React.Component{
  render(){

  return (
    <Navigator/>
  );
  }
}

