import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/login';

const AppNavigator = createStackNavigator({
  Login
});

export default createAppContainer(AppNavigator);
