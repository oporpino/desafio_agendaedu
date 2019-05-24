import React, { Component } from 'react';

import { common, buttons } from '../styles/common';

import { View, Text, TextInput, StyleSheet } from 'react-native';
export default class Login extends Component {
  render() {
    return (
      <View>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail ou usuário</Text>

            <TextInput id="emailInput" style={styles.emailInput}>
              Login
            </TextInput>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              id="passwordInput"
              style={[styles.textInpt, styles.passwordInput]}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20
  },
  label: {
    color: '#666666'
    //fontFamily: 'SFProDisplay' #todo
  },
  inputGroup: {
    height: 74,
    marginTop: 17
  },

  emailInput: {
    ...common.textInput,
    borderColor: '#733DBE'
  },
  passwordInput: {
    ...common.textInput,
    borderColor: '#ABB1B7'
  }
});
