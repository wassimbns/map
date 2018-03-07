/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
}); */


export default class App extends React.component {
  render() {
    return (
      <View style={styles.container}>
         <MapView style={styles.map}
                  region={{
                    latitude: 59.32932349999999,
                    longitude: 18.068580800000063,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                  }} >
         </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'centre'

  },
  map: {
    position: 'absolute',
    top: '0',
    left:'0',
    bottom:'0',
    right:'0'
  }
});
