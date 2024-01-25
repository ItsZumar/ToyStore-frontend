import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppHeader, SeeAllHeading, ToysCard} from '../../../Components';
import {PRODUCTS_DATA} from '../../../constants/data';

export const HomeScreen = () => {
  return (
    <>
      <AppHeader title="Buy Toys" rightIcon="cart" />
      <View style={styles.container}>
        <SeeAllHeading title="Best Selling Toys" />

        {/* cards */}
        <View style={{width: '90%', alignSelf: 'center'}}>
          <FlatList
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-around',
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
              justifyContent: 'space-between',
            }}
            numColumns={2}
            data={PRODUCTS_DATA}
            renderItem={({item}) => <ToysCard item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    paddingTop: 20,
  },
});
