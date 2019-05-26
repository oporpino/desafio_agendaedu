import React, { Component } from 'react';
import Routes from './src/routes';
import { AppLoading, Asset, Font } from 'expo';

// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

export default class App extends Component {
  state = {
    isReady: false
  };

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      'sf-pro-display-black': require('./assets/fonts/sf-pro-display-black.otf'),
      'sf-pro-display-blackitalic': require('./assets/fonts/sf-pro-display-blackitalic.otf'),
      'sf-pro-display-bold': require('./assets/fonts/sf-pro-display-bold.otf'),
      'sf-pro-display-bolditalic': require('./assets/fonts/sf-pro-display-bolditalic.otf'),
      'sf-pro-display-heavy': require('./assets/fonts/sf-pro-display-heavy.otf'),
      'sf-pro-display-heavyitalic': require('./assets/fonts/sf-pro-display-heavyitalic.otf'),
      'sf-pro-display-light': require('./assets/fonts/sf-pro-display-light.otf'),
      'sf-pro-display-lightitalic': require('./assets/fonts/sf-pro-display-lightitalic.otf'),
      'sf-pro-display-medium': require('./assets/fonts/sf-pro-display-medium.otf'),
      'sf-pro-display-mediumitalic': require('./assets/fonts/sf-pro-display-mediumitalic.otf'),
      'sf-pro-display-regular': require('./assets/fonts/sf-pro-display-regular.otf'),
      'sf-pro-display-regularitalic': require('./assets/fonts/sf-pro-display-regularitalic.otf'),
      'sf-pro-display-semibold': require('./assets/fonts/sf-pro-display-semibold.otf'),
      'sf-pro-display-semibolditalic': require('./assets/fonts/sf-pro-display-semibolditalic.otf'),
      'sf-pro-display-thin': require('./assets/fonts/sf-pro-display-thin.otf'),
      'sf-pro-display-thinitalic': require('./assets/fonts/sf-pro-display-thinitalic.otf'),
      'sf-pro-display-ultralight': require('./assets/fonts/sf-pro-display-ultralight.otf'),
      'sf-pro-display-ultralightitalic': require('./assets/fonts/sf-pro-display-ultralightitalic.otf'),
      'sf-pro-text-bold': require('./assets/fonts/sf-pro-text-bold.otf'),
      'sf-pro-text-bolditalic': require('./assets/fonts/sf-pro-text-bolditalic.otf'),
      'sf-pro-text-heavy': require('./assets/fonts/sf-pro-text-heavy.otf'),
      'sf-pro-text-heavyitalic': require('./assets/fonts/sf-pro-text-heavyitalic.otf'),
      'sf-pro-text-light': require('./assets/fonts/sf-pro-text-light.otf'),
      'sf-pro-text-lightitalic': require('./assets/fonts/sf-pro-text-lightitalic.otf'),
      'sf-pro-text-medium': require('./assets/fonts/sf-pro-text-medium.otf'),
      'sf-pro-text-mediumitalic': require('./assets/fonts/sf-pro-text-mediumitalic.otf'),
      'sf-pro-text-regular': require('./assets/fonts/sf-pro-text-regular.otf'),
      'sf-pro-text-regularitalic': require('./assets/fonts/sf-pro-text-regularitalic.otf'),
      'sf-pro-text-semibold': require('./assets/fonts/sf-pro-text-semibold.otf'),
      'sf-pro-text-semibolditalic': require('./assets/fonts/sf-pro-text-semibolditalic.otf')
    });
  };

  finishLoading = () => {
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={this.finishLoading}
        />
      );
    } else {
      return <Routes />;
    }
  }
}
