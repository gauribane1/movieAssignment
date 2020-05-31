import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import searchMovie from '../components/searchMovie';

const screens={

  Movies:{
      screen:searchMovie
  }
}
const HomeStack= createStackNavigator(screens);
export default  createAppContainer(HomeStack);