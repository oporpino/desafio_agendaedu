import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, Image, StyleSheet, AsyncStorage } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import moment from '../handlers/moment';
import Event from '../components/event';

export default class Group extends Component {
  renderItem = ({ item }) => <Event name="event" item={item} />;

  render() {
    const group = this.props.item;

    return (
      <View>
        <View style={styles.groupDivisor}>
          <Text style={styles.groupText}>
            {moment(group.day)
              .format('dddd, DD [de] MMMM')
              .replace('-feira', '')}
          </Text>
          <View style={styles.hr} />
        </View>
        <FlatList
          style={styles.flatList}
          data={group.events}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hr: {
    flex: 1,
    borderBottomColor: '#733DBE',
    borderBottomWidth: 1,
    width: 1,
    opacity: 0.15
  },
  groupDivisor: {
    flexDirection: 'row',
    alignContent: 'center',

    marginLeft: 24,
    marginRight: 24,
    marginTop: 19,
    marginBottom: 19
  },
  groupText: {
    color: '#999999',
    marginRight: 16
  }
});
