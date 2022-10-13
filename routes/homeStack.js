import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from '../Components/Main';
import Carousal from '../Components/MainBody/Carousal/Carousal';

const screens ={
   default:{
      screen: Main
   },
   carousal:{
      screen: Carousal
   }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)