import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class Wall extends React.Component {
  state = {
    scrollY: new Animated.Value(0)
  };

  render() {
    return (
      <Animated.ScrollView
        {...this.props}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {this.props.children}
      </Animated.ScrollView>
    );
  }
}
