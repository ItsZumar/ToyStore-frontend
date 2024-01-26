import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TRENDY_PRODUCTS_I} from '../../../constants/data';
import {Colors} from '../../../Utils';

interface TrendyCardI {
  product: TRENDY_PRODUCTS_I;
}

const ColorsPaleteLight = [
  Colors.lightPink01,
  Colors.lightBlue,
  Colors.lightAqua,
  Colors.lightGreen,
  Colors.lightYellow,
];

const ColorsPaleteDark = [
  Colors.lightPink02,
  Colors.lightBlue02,
  Colors.lightAqua02,
  Colors.lightGreen02,
  Colors.lightYellow02,
];

export const TrendyCard = ({product}: TrendyCardI) => {
  return (
    <TouchableOpacity
      key={product.id}
      style={[
        styles.container,
        {backgroundColor: ColorsPaleteLight[product.id]},
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 70, height: 70, backgroundColor: 'red'}}></View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subTitle}>{product.subTitle}</Text>
        </View>
      </View>

      <View
        style={[
          styles.priceContainer,
          {backgroundColor: ColorsPaleteDark[product.id]},
        ]}>
        <Text style={styles.toyPrice}>{`$${product.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    elevation: 1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 5,
  },
  subTitle: {},
  priceContainer: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 10,
  },
  toyPrice: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
});
