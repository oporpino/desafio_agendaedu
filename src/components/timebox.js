import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';

import moment from '../handlers/moment';

const TimeBox = ({ time, size }) => (
  <View style={styles.clockGroup}>
    <Icon name="clockcircleo" size={size} style={styles.clockIcon} />
    <Text style={[styles.clockText, { fontSize: size }]}>
      {moment(time).format('HH:mm')}
    </Text>
  </View>
);

export default TimeBox;

const styles = StyleSheet.create({
  clockGroup: {
    flexDirection: 'row',
    color: '#666666',
    alignContent: 'center',
    marginBottom: 12
  },
  clockIcon: {
    color: '#666666',
    marginRight: 6
  },
  clockText: {
    alignContent: 'center',
    color: '#666666',
    fontFamily: 'sf-pro-display-regular'
  }
});
