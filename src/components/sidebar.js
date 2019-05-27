import React, { Component } from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Drawer, Container } from 'native-base';

class SideBar extends Component {
  exit = () => {
    AsyncStorage.removeItem('user_token');
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.header} />
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Icon name="event-available" size={30} style={styles.icon} />
            <Text style={styles.text}>Eventos</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.footer} onPress={this.exit}>
          <Text style={styles.exitText}>Sair</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

export default class SideBarContainer extends Component {
  state = {
    open: 0
  };

  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  toogleMenu = () => {
    if (this.state.open == 0) {
      this.openDrawer();
      this.setState({ open: 1 });
    } else {
      this.closeDrawer();
      this.setState({ open: 0 });
    }
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>{this.props.children}</Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flex: 2,
    backgroundColor: '#F1EBF9',
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24
  },
  menu: { flex: 6, paddingLeft: 24, paddingTop: 24, paddingRight: 24 },
  footer: {
    flex: 1,

    backgroundColor: '#733DBE',
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'sf-pro-display-light',
    color: '#733DBE'
  },
  icon: {
    color: '#733DBE',
    marginRight: 12
  },
  exitText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'sf-pro-display-light'
  }
});
