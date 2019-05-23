import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';

const AppNavigator = createStackNavigator({
  Main
});

export default createAppContainer(AppNavigator);
