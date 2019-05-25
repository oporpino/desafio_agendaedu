import React, { Component } from 'react';
import Routes from './src/routes';
import { AppLoading, Asset, Font } from 'expo';

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
  state = {
    isReady: false
  };

  loadAssetsAsync = async () => {
    await Font.loadAsync({
      'sf-pro-display-regular': require('./assets/fonts/sf-pro-display-regular.otf'),
      'sf-pro-display-bold': require('./assets/fonts/sf-pro-display-bold.otf'),
      'sf-pro-display-semibold': require('./assets/fonts/sf-pro-display-semibold.otf'),
      'sf-pro-display-ultralight': require('./assets/fonts/sf-pro-display-ultralight.otf')
    });

    this.setState({ fontLoaded: true });
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
