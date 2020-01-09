import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default class FirebaseScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.center}> Fire-base Screen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  center: {
    alignSelf: 'center',
    fontSize: 24,
  },
});
