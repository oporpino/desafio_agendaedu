import React, { Component } from 'react';
import Routes from './src/routes';
import { AppLoading, Asset, Font } from 'expo';

// function cacheImages(images) {
//   return images.map((image) => {
//     if (typeof image === 'string') {
//       return Image.prefetch(image);
//     }
//     return Asset.fromModule(image).downloadAsync();
//   });
// }

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
  state = {
    isReady: false
  };

  loadAssetsAsync = async () => {
    console.log('start');
    await Font.loadAsync({
      'sf-pro-display-regular': require('./assets/fonts/sf-pro-display-regular.otf'),
      'sf-pro-display-bold': require('./assets/fonts/sf-pro-display-bold.otf'),
      'sf-pro-display-semibold': require('./assets/fonts/sf-pro-display-semibold.otf')
    });

    this.setState({ fontLoaded: true });
  };

  finishLoading = () => {
    console.log('ends');
    this.setState({ isReady: true });
  };

  render() {
    console.log('render');
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={this.finishLoading}
        />
      );
    } else {
      console.log('routes');
      return <Routes />;
    }
  }
}
