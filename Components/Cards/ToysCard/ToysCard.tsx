import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {PRODUCTS_DATA_I} from '../../../constants/data';
import {Colors} from '../../../Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

interface ToysCardI {
  item: PRODUCTS_DATA_I;
  onPressHandler: (item: PRODUCTS_DATA_I) => void;
}

const ColorsPalete = [
  Colors.lightPink01,
  Colors.lightBlue,
  Colors.lightAqua,
  Colors.lightPink01,
  Colors.lightGreen,
  Colors.lightYellow,
];

const ToysCard = ({item, onPressHandler}: ToysCardI) => {
  return (
    <TouchableOpacity
      style={[styles.toyContainer, {backgroundColor: ColorsPalete[item.id]}]}
      key={item.id}
      onPress={() => onPressHandler(item)}>
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
      <Image source={item.image} style={styles.productImage} />

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export {ToysCard};

const styles = StyleSheet.create({
  toyContainer: {
    width: width * 0.427,
    padding: 15,
    borderRadius: 15,
    elevation: 1,
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
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
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
    // elevation: 3,
  },
});
