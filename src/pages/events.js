import React, { Component } from 'react';

import { Text } from 'native-base';
import { View, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';

import { Entypo as Icon } from '@expo/vector-icons';

import { FlatList } from 'react-native-gesture-handler';

import moment from '../handlers/moment';
import Group from '../components/group';

import AgendaEdu from '../services/api';
import SideBarContainer from '../components/sidebar';

export default class Events extends Component {
  state = {
    groups: [],
    limit: 10,
    page: 1,
    metadata: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: props => (
        <TouchableOpacity
          style={styles.header}
          onPress={navigation.getParam('openMenu')}
        >
          <Icon name="menu" size={32} style={styles.menuIcon} />
          <Text style={styles.title}>Eventos</Text>
        </TouchableOpacity>
      ),
      headerStyle: { height: 60, borderBottomColor: '#F2F2F2' },
      gesturesEnabled: false
    };
  };

  componentDidMount() {
    this.loadEvents();
    this.props.navigation.setParams({ openMenu: this._openMenu });
  }
  _openMenu = () => {
    this.refs.sidebar.toogleMenu();
  };

  loadEvents = async (page = 1) => {
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
      <SideBarContainer ref="sidebar" navigation={this.props.navigation}>
        <View>
          <FlatList
            data={groups}
            keyExtractor={item => item.day.toString()}
            renderItem={this.renderItem}
            onEndReached={this.loadMore}
            onEndReachedThreshold={0.3}
          />
        </View>
      </SideBarContainer>
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
