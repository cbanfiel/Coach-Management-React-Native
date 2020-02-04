import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements'
import TextTicker from 'react-native-text-ticker';


export default class NewTeamCard extends Component {
    render() {
        return (
            <TouchableOpacity style={{margin:15,shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            
            elevation: 20,}}>
                <View style={{width:150, height:175, borderWidth:5, borderRadius:20, overflow:'hidden'}}>
                    <Icon name='add' reverse type='material'></Icon>
                    
                    <View style={{position:'absolute', height:30, alignSelf:'center', width:'100%', marginTop:140, backgroundColor:'black'}}>
                    <TextTicker
                    duration={4000}
                    loop
                    repeatSpacer={50}
                    style={{color:'white', textAlign:'center', marginTop:5}}>{'New Team'}</TextTicker>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}