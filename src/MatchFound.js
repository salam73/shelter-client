import React, { Component } from 'react';
import { Alert, Image, Text, Platform, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  match: {
    flex: 1,
    color: '#3B8686',
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  matchContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },

  address: {
    flex: 1,
    color: '#3B8686',
    fontSize: 30,
    textAlign: 'center',
  },

  addressContainer: {
    flex: 3,
  },
});

export default () => (
  <View style={styles.container}>
    <View style={styles.matchContainer}>
      <Text style={styles.match} />
      <Text style={styles.match} selectable>
        Match Found!
      </Text>
    </View>
    <View style={styles.addressContainer}>
      <Text style={styles.address} selectable>
        {this.props.location.state}
      </Text>
    </View>
  </View>
);
