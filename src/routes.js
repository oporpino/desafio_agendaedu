import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';

const AppNavigator = createStackNavigator({
  Login,
  Main
});

export default createAppContainer(AppNavigator);
