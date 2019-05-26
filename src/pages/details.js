import React, { Component } from 'react';

import { Text } from 'native-base';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import moment from '../handlers/moment';
import TimeBox from '../components/timebox';

export default class Details extends Component {
  state = {
    event: null
  };

  componetDidMount() {}

  render() {
    const { navigation } = this.props;
    const event = navigation.getParam('event', null);

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: event.image }} />

        <View style={styles.content}>
          <View style={styles.firstRow}>
            <View style={styles.dateBox}>
              <Text style={styles.day}>
                {moment(event.startAt).format('DD')}
              </Text>
              <Text style={styles.month}>
                {moment(event.startAt)
                  .format('MMM')
                  .toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>{event.title}</Text>
              <TimeBox time={event.startAt} size={16} />
            </View>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.descriptionBox}>{event.description}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC'
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  content: {
    flex: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32
  },
  firstRow: {
    flexDirection: 'row',
    marginBottom: 32
  },
  dateBox: {
    backgroundColor: '#F1EBF9',

    width: 60,
    height: 60,
    borderRadius: 5,
    paddingLeft: 17,
    paddingTop: 9,
    marginRight: 16
  },
  day: {
    fontSize: 22,
    color: '#733DBE',
    fontFamily: 'sf-pro-display-bold'
  },
  month: {
    fontSize: 14,
    color: '#733DBE',
    fontFamily: 'sf-pro-text-regular'
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#333333',
    fontSize: 22,
    fontFamily: 'sf-pro-display-bold'
  },
  descriptionBox: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'sf-pro-text-regular'
  }
});
