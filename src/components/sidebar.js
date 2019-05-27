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
        <View style={styles.header}>
          <View style={styles.box}>
            <Text style={styles.headerTitle}>MY</Text>
            <Text style={styles.headerSubtitle}>events</Text>
          </View>
          <Text style={styles.headerDescription}>Seu app de eventos</Text>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              this.props.onPressItem();
            }}
          >
            <Icon
              name="event-available"
              size={30}
              style={styles.menuItemIcon}
            />
            <Text style={styles.menuItemText}>Eventos</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.exitButton} onPress={this.exit}>
          <Text style={styles.exitText}>Sair</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>developed by @gporpino</Text>
        </View>
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
        content={
          <SideBar
            navigation={this.props.navigation}
            onPressItem={this.toogleMenu}
          />
        }
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
    paddingTop: 12,
    paddingRight: 24
  },
  box: {
    backgroundColor: '#733DBE',
    alignSelf: 'flex-start',

    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 12
  },
  headerTitle: {
    fontSize: 42,
    color: '#FFF',
    fontFamily: 'sf-pro-display-bold'
  },
  headerSubtitle: {
    fontSize: 24,
    color: '#FFF'
  },
  headerDescription: {
    color: '#666',
    fontFamily: 'sf-pro-display-light',
    marginBottom: 12
  },
  menu: { flex: 6, paddingLeft: 24, paddingTop: 24, paddingRight: 24 },
  exitButton: {
    flex: 1,

    backgroundColor: '#733DBE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
    paddingTop: 5
  },
  footerText: {
    color: '#666'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: 'sf-pro-display-light',
    color: '#733DBE'
  },
  menuItemIcon: {
    color: '#733DBE',
    marginRight: 12
  },
  exitText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'sf-pro-display-light'
  }
});
