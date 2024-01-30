import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MenuList} from '../../../Components';
import {MENU_LIST_DATA, MENU_LIST_I} from '../../../constants/data';

export const Menu = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        position: 'absolute',
      }}>
      {MENU_LIST_DATA.map((menuItem: MENU_LIST_I) => (
        <MenuList menuItem={menuItem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
