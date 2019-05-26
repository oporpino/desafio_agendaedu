import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

import { Entypo as Icon } from '@expo/vector-icons';

import moment from '../handlers/moment';

const Event = props => (
  <View style={styles.event}>
    <View style={styles.borderLine} />
    {props.item.image ? (
      <Image
        style={styles.image}
        source={{
          uri: props.item.image
        }}
      />
    ) : null}

    <View style={styles.itemContent}>
      <Text style={styles.eventText}>EVENTOS</Text>
      <Text style={styles.titleItem}>{props.item.title}</Text>

      <View style={styles.clockGroup}>
        <Icon name="clock" size={14} style={styles.clockIcon} />
        <Text style={styles.clockText}>14:00</Text>
      </View>
      <Text style={styles.dateText}>
        {moment(props.item.startAt)
          .format('dddd, DD [de] MMMM [às] LT[h]')
          .replace('-feira', '')}
      </Text>
    </View>
  </View>
);

export default Event;

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
    fontSize: 14
  },
  dateText: {
    color: '#999999',
    fontSize: 12
  },
  event: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,

    borderRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#733DBE',
    shadowOpacity: 0.1,

    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 5,
    marginBottom: 5
  },
  borderLine: {
    backgroundColor: '#733DBE',
    width: 4,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  image: {
    width: 66,
    height: 92,
    marginLeft: 14,
    marginTop: 16,

    borderRadius: 10
  },
  itemContent: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16
  },
  eventText: {
    color: '#999999',
    marginBottom: 12
  },
  titleItem: {
    color: '#333333',
    fontSize: 16,
    fontFamily: 'sf-pro-display-medium',
    marginBottom: 8
  }
});
