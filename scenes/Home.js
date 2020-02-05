import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TeamCard from '../components/TeamCard';
import NewTeamCard from '../components/NewTeamCard';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Button, Label, Item } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends React.Component {

  state = {
    email: '',
    displayName: ''
  }

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.container}>




          <TeamCard name={'Eastern Michigan Softball'} onPress={() => { this.props.navigation.navigate('Management') }} />
          <NewTeamCard></NewTeamCard>
        </View>
        <View style={styles.signOut}>

          <Text>Welcome Back {this.state.displayName}</Text>
          <TouchableOpacity onPress={() => this.signOutUser()}>

            <Text style={{ color: 'blue' }}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 10,
  },
  signOut: {
    padding: 20,
    marginBottom: 15,
    alignItems: 'center'
  }
});
