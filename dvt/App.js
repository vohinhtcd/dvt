import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from './src/screen/Home';
import MainScreen from './src/screen/Main';

const AppNavigation = createStackNavigator({
  Home: HomeScreen,
  Main: MainScreen,
});

export default createAppContainer(AppNavigation);

