import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppHeader} from '../../../Components';

export const CartScreen = () => {
  return (
    <>
      <AppHeader title="Your Cart" rightIcon="" />
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
