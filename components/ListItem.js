import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';


export default class ListItem extends Component {

    state={
        item: this.props.item
    }

    render() {
        return (
                <View style={{width:'100%', height:70, borderWidth:0.5, overflow:'hidden', flexDirection:'row', padding:5}}>
                        <TextInput 
                        style={{fontSize:18, flex:1}}
                        value={this.state.item.name}
                        onChangeText={(value)=>{
                            let item = Object.assign({}, this.state.item);
                            item.name = value;
                            this.setState({item: item})
                        }}
                        />
                        <View style={{flexDirection:'column', flex:1, alignItems:'center', justifyContent:'center'}}>
                        <TextInput 
                        style={{fontSize:18, flex:1}}
                        value={this.state.item.email}
                        onChangeText={(value)=>{
                            let item = Object.assign({}, this.state.item);
                            item.email = value;
                            this.setState({item: item})
                        }}
                        />
                        <TextInput 
                        style={{fontSize:18, flex:1}}
                        value={this.state.item.phone}
                        onChangeText={(value)=>{
                            let item = Object.assign({}, this.state.item);
                            item.phone = value;
                            this.setState({item: item})
                        }}
                        />

                        </View>
                        <TouchableOpacity onPress={()=> {this.props.deletePlayer(this)}}>
                        <Icon name='delete' reverse type='material' size={16}></Icon>
                        </TouchableOpacity>
                </View>
        );
    }
}