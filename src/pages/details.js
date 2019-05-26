import React, { Component } from 'react';

import { Text } from 'native-base';
import { Feather as Icon } from '@expo/vector-icons';

import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import moment from '../handlers/moment';
import TimeBox from '../components/timebox';

export default class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={20} style={styles.backIcon} />
          <Text style={styles.backText}>Detalhes do evento</Text>
        </TouchableOpacity>
      ),
      headerStyle: { height: 60, borderBottomColor: '#F2F2F2' }
    };
  };

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
  header: {
    marginLeft: 24,
    flexDirection: 'row',
    alignContent: 'center'
  },
  backIcon: {
    marginRight: 32
  },
  backText: {
    fontSize: 18,
    fontFamily: 'sf-pro-display-medium'
  },
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
