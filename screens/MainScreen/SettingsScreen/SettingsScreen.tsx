import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppHeader, SettingList} from '../../../Components';
import {SETTINGS_ITEMS} from '../../../constants/data';
import {Colors} from '../../../Utils';

export const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Settings" />
      <FlatList
        data={SETTINGS_ITEMS}
        keyExtractor={item => item.id.toString()}
        style={{paddingTop: 20}}
        renderItem={({item}) => <SettingList item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
