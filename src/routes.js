import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Events from './pages/events';
import Details from './pages/details';

const AppNavigator = createStackNavigator({
  Login,
  Events,
  Details
});

export default createAppContainer(AppNavigator);
