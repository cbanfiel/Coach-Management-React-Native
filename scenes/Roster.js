import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ListView } from 'react-native';
import {Icon} from 'react-native-elements';
import ListItem from '../components/ListItem';
import { TouchableOpacity } from 'react-native-gesture-handler';

const players=[
    {key:0, name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'},
    {key:1, name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'},
    {key:2, name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'},
    {key:3, name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'},
    {key:4, name: 'Karen Smith', phone:'123456789', email:'karen@gmail.com'}
  ];

export default class Roster extends Component {


    state =  {
        items: players
    }

    deletePlayer = (player)=> {
        let plys = players.splice(players.indexOf(player),1);
        this.setState({items:plys});
    }

    addPlayer = () => {
        let items = this.state.items;
        items.push({
            name: 'Enter Name',
            email: 'Enter email',
            phone: 'Enter phone'
        });

        this.setState({items:items});
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) =><ListItem item={item} deletePlayer={this.deletePlayer}> </ListItem>}
        />

<TouchableOpacity style={{margin:20}} onPress={()=> {this.addPlayer()}}>
<Icon name='add' reverse type='material'></Icon>
</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  }
})
