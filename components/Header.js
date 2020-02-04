import React from 'react';
import { Header, Icon, View } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';



class NavigationHeader extends React.Component {

    render() {
        return (
            <Header backgroundColor='rgba(30,30,30,1)'
                centerComponent={{ text: "Coach Management", style: { color: 'white', fontSize: 18} }} />
                
        )

    }
}

export default NavigationHeader;