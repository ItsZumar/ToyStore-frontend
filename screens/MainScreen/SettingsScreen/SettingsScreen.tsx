import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppHeader} from '../../../Components';

export const SettingsScreen = () => {
  return (
    <>
      <AppHeader title="Settings Us" rightIcon="notification" />
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
