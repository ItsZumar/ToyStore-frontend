import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppHeader, ToysCard} from '../../../Components';
import {PRODUCTS_DATA, PRODUCTS_DATA_I} from '../../../constants/data';
import {Colors} from '../../../Utils';

interface FavouritesScreenProps {
  navigation: any;
  route: any;
}

export const FavouritesScreen: React.FC<FavouritesScreenProps> = ({
  navigation,
  route,
}) => {
  const onToysCardPress = (item: PRODUCTS_DATA_I) => {
    navigation.navigate('ProductDescriptionScreen', {item});
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <AppHeader title="My Favourites" leftIcon="heart" />

      <View style={styles.container}>
        <FlatList
          data={PRODUCTS_DATA}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-around',
            paddingBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'space-between',
            gap: 4,
          }}
          numColumns={2}
          renderItem={({item}) => (
            <ToysCard item={item} onPressHandler={onToysCardPress} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '93%',
    alignSelf: 'center',
    flex: 1,
    marginTop: 20,
  },
});
