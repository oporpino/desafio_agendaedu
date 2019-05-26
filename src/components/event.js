import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import TimeBox from '../components/timebox';
import moment from '../handlers/moment';

export default class Event extends Component {
  render() {
    const props = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Details', { event: props.item });
        }}
      >
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

            <TimeBox time={props.item.startAt} size={14} />
            <Text style={styles.dateText}>
              {moment(props.item.startAt)
                .format('dddd, DD [de] MMMM [às] LT[h]')
                .replace('-feira', '')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

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
