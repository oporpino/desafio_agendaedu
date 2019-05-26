import React, { Component } from 'react';

import { Text } from 'native-base';
import { Image, View, StyleSheet, Dimensions } from 'react-native';

import api from '../services/api';

export default class Details extends Component {
  static navigationOptions = {};

  render() {
    console.log(Dimensions.get('window').width);

    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/350x260'
          }}
        />

        <View style={styles.content}>
          <View style={styles.firstRow}>
            <View style={styles.dateBox}>
              <Text style={styles.day}>25</Text>
              <Text style={styles.month}>JAN</Text>
            </View>

            <Text style={styles.title}>
              Exposição de telas no museu de fotografia
            </Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.descriptionBox}>
              askd askldh alksjdaks da sd as d jas dashd a sda sdk ja sd ahsd
              asd a sd a sd a sdhasd ashdajksdjk
            </Text>
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
    color: '#733DBE'
  },
  month: {
    fontSize: 14,
    color: '#733DBE'
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#333333',
    fontSize: 22
  },
  descriptionBox: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 28
  }
});
