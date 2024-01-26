import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppHeader,
  SeeAllHeading,
  ToysCard,
  TrendyCard,
} from '../../../Components';
import {
  PRODUCTS_DATA,
  PRODUCTS_DATA_I,
  TRENDY_PRODUCTS_DATA,
} from '../../../constants/data';
import {Colors} from '../../../Utils';

interface HomeScreenProps {
  navigation: any;
  route: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const onRightPressHandler = () => {
    navigation.navigate('NotificationScreen');
  };

  const onToysCardPress = (item: PRODUCTS_DATA_I) => {
    navigation.navigate('ProductDescriptionScreen', {item});
  };

  return (
    <>
      <AppHeader
        title="Toys Store"
        rightIcon="bell"
        leftIcon="menu"
        onRightPress={onRightPressHandler}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SeeAllHeading title="Best Selling Toys" />

        {/* cards */}
        <View
          style={{
            width: '93%',
            alignSelf: 'center',
            flex: 1,
          }}>
          <FlatList
            data={PRODUCTS_DATA.slice(0, 4)}
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
        <SeeAllHeading title="Popular and trendy" />

        <View style={styles.trendyCards}>
          {TRENDY_PRODUCTS_DATA.slice(0, 4).map(product => (
            <TrendyCard product={product} key={product.id.toString()} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 5,
  },
  trendyCards: {
    paddingHorizontal: 20,
  },
});
