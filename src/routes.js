import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Events from './pages/events';

const AppNavigator = createStackNavigator({
  Login,
  Events
});

export default createAppContainer(AppNavigator);
