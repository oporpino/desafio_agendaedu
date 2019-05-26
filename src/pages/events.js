import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, StyleSheet, AsyncStorage } from 'react-native';

import { Entypo as Icon } from '@expo/vector-icons';

import { FlatList } from 'react-native-gesture-handler';

import moment from '../handlers/moment';
import Group from '../components/group';

import api from '../services/api';

export default class Events extends Component {
  state = {
    events: [],
    groups: []
  };

  static navigationOptions = {
    headerLeft: props => (
      <View style={styles.header}>
        <Icon name="menu" size={32} style={styles.menuIcon} />
        <Text style={styles.title}>Eventos</Text>
      </View>
    ),
    gesturesEnabled: false
  };

  componentDidMount() {
    this.loadEvents();
  }

  loadEvents = async () => {
    const token = await AsyncStorage.getItem('user_token');

    const response = await api.get('/events?limit=20;page=5', {
      headers: { 'Content-Type': 'application/json', token: token }
    });

    const events = response.data.data;

    //TODO: remove to service layer
    const groups = [];
    events.map(event => {
      let found = false;
      let eventDay = moment.unix(Date.parse(event.startAt));

      groups.map(group => {
        if (eventDay.isSame(group.day, 'day')) {
          group.events.push(event);
          found = true;
          return;
        }
      });
      if (!found) {
        groups.push({
          day: eventDay,
          events: [event]
        });
      }
    });

    this.setState({ groups: groups });
  };

  renderItem = ({ item }) => <Group item={item} />;

  render() {
    const groups = this.state.groups;
    return (
      <View>
        <FlatList
          data={groups}
          keyExtractor={item => item.day.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 16,
    height: 33,
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    alignSelf: 'center',
    fontSize: 18
  },
  menuIcon: {
    marginRight: 16
  }
});
