import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {PRODUCTS_DATA_I} from '../../../constants/data';
import {Colors} from '../../../Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

interface ToysCardI {
  item: PRODUCTS_DATA_I;
}

const ColorsPalete = [
  Colors.lightPink,
  Colors.lightBlue,
  Colors.lightAqua,
  Colors.lightPink,
  Colors.lightGreen,
  Colors.lightYellow,
];

const ToysCard = ({item}: ToysCardI) => {
  return (
    <View
      style={[styles.toyContainer, {backgroundColor: ColorsPalete[item.id]}]}
      key={item.id}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.toyTitle}>{item.title}</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="heart" color={'red'} size={23} />
          </TouchableOpacity>
        </View>
        <Text style={styles.toyRating}>{`⭐ ${item.ratings}`}</Text>
        <Text style={styles.toyPrice}>{`$${item.price}`}</Text>
      </View>
      <Image
        source={item.image}
        style={{width: 100, height: 100, alignSelf: 'center'}}
      />

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ToysCard};

const styles = StyleSheet.create({
  toyContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
  },
  toyTitle: {
    fontWeight: '700',
    fontSize: 17,
    color: Colors.black,
  },
  toyRating: {
    fontWeight: '500',
    fontSize: 14,
  },
  toyPrice: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: 16,
  },
  btnText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 7,
    marginVertical: 10,
  },
});
