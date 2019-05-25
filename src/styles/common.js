import { StyleSheet } from 'react-native';

const common = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 13,
    paddingBottom: 13,
    color: '#333333',
    fontFamily: 'sf-pro-display-regular'
  }
});

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
});

const messages = StyleSheet.create({
  error: {
    color: 'red'
  }
});

export { common, buttons, messages };
