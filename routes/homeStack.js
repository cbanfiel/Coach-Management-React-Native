import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../scenes/Home';
import Management from '../scenes/Management';
import Roster from '../scenes/Roster';

const screens={
    Home: {
        screen: Home
    },
    Management:{
        screen: Management
    },
    Roster:{
        screen: Roster
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);