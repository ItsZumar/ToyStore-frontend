import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SETTINGS_ITEMS_I} from '../../../constants/data';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SettingListI {
  item: SETTINGS_ITEMS_I;
}

export const SettingList: React.FC<SettingListI> = ({item}) => {
  return (
    <TouchableOpacity style={styles.listContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={30} color={'grey'} />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: 20,
    fontSize: 17,
  },
});
