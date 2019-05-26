import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, StyleSheet, AsyncStorage } from 'react-native';

import { Entypo as Icon } from '@expo/vector-icons';

import { FlatList } from 'react-native-gesture-handler';

import moment from '../handlers/moment';
import Group from '../components/group';

import AgendaEdu from '../services/api';

export default class Events extends Component {
  state = {
    groups: [],
    limit: 10,
    page: 1,
    metadata: null
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

  loadEvents = async (page = 1) => {
    const token = await AsyncStorage.getItem('user_token');

    AgendaEdu.initialize(token);

    const { data, metadata } = await AgendaEdu.events({
      limit: this.state.limit,
      page: page
    });

    const groups = AgendaEdu.combine(data, this.state.groups);

    this.setState({ groups: groups, metadata, page });
  };

  loadMore = () => {
    const { page, metadata } = this.state;

    if (page === metadata.total_pages) return;

    this.loadEvents(page + 1);
  };

  renderItem = ({ item }) => (
    <Group item={item} navigation={this.props.navigation} />
  );

  render() {
    const groups = this.state.groups;
    return (
      <View>
        <FlatList
          data={groups}
          keyExtractor={item => item.day.toString()}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.3}
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
