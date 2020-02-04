import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import TextTicker from 'react-native-text-ticker';


export default class TeamCard extends Component {
    render() {
        return (
            <TouchableOpacity style={{margin:15,shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            
            elevation: 20}} onPress={this.props.onPress?this.props.onPress:null}>
                <View style={{width:150, height:175, borderWidth:5, borderRadius:20, overflow:'hidden'}}>
                    <Image style={{height:200}} source={{uri: 'https://i.pinimg.com/originals/68/ae/3f/68ae3f3310a8f03b502e86e84849a0c1.jpg'}}></Image>
                    
                    <View style={{position:'absolute', height:30, alignSelf:'center', width:'100%', marginTop:140, backgroundColor:'black'}}>
                    <TextTicker
                    duration={4000}
                    loop
                    repeatSpacer={50}
                    style={{color:'white', textAlign:'center', marginTop:5}}>{this.props.name}</TextTicker>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}