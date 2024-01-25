import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppHeader} from '../../../Components';

export const ProfileScreen = () => {
  return (
    <>
      <AppHeader title="Profile Screen" rightIcon="notification" />
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
