import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {MENU_LIST_I} from '../../../constants/data';
import {Colors} from '../../../Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: windowWidth} = Dimensions.get('window');

interface MenuListI {
  menuItem: MENU_LIST_I;
}

export const MenuList: React.FC<MenuListI> = ({menuItem}) => {
  return (
    <View key={menuItem.id} style={styles.itemContainer}>
      <Text style={styles.itemText}>{menuItem.title}</Text>

      <MaterialCommunityIcons name={menuItem.icon} size={22} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: windowWidth / 2,
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
