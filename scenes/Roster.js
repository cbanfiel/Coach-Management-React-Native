import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ListView } from 'react-native';
import {Icon} from 'react-native-elements';
import ListItem from '../components/ListItem';
import * as firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Item, Label } from 'native-base';




export default class Roster extends Component {


    state =  {
        items: this.props.navigation.state.params.list
    }

    deletePlayer = (player)=> {
        let plys = players.splice(players.indexOf(player),1);
        this.setState({items:plys});
    }

    addPlayer = (name, email, phone) => {
        let items = this.state.items;
        items.push({
            name: name,
            email: email,
            phone: phone
        });

        var key = firebase.database().ref('/contacts').push().key
        firebase.database().ref('/contacts').child.key().set({name : name, email: email, phone: phone})
        this.setState({items:items});
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => (
          <ListItem item={item} deletePlayer={this.deletePlayer}> </ListItem>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

<Item floatingLabel>
        <Label>Name</Label>
        <Input
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(name) => this.setState({name})}
        />
        </Item>
        <Item floatingLabel>
        <Label>Email</Label>
        <Input
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(email) => this.setState({email})}
        />
        </Item>
        <Item floatingLabel>
        <Label>Phone</Label>
        <Input
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(phone) => this.setState({phone})}
        />
        </Item>


<TouchableOpacity style={{margin:20}} onPress={()=> {this.addPlayer(this.state.name, this.state.email, this.state.password)}}>
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
