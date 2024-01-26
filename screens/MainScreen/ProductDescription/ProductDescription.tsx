import React, {useCallback, useRef} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {AppHeader} from '../../../Components';
import {PRODUCTS_DATA_I} from '../../../constants/data';
import {Colors} from '../../../Utils';
import {TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');

const imgUri =
  'https://images.unsplash.com/photo-1705179910581-7f3465999f05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface ProductDescriptionScreenProps {
  navigation: any;
  route: any;
}

export const ProductDescription: React.FC<ProductDescriptionScreenProps> = ({
  navigation,
  route,
}) => {
  // params
  const {item} = route.params;

  // sharedValues
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: interpolate(opacity.value, [0, 1], [1, 0]),
  }));

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      opacity.value = withTiming(0, undefined, isFinished => {
        if (isFinished) {
          opacity.value = withDelay(500, withTiming(1));
        }
      });
    });

  const doubleTap = Gesture.Tap()
    .maxDuration(250)
    .numberOfTaps(2)
    .onStart(() => {
      scale.value = withSpring(1, undefined, isFinished => {
        if (isFinished) {
          scale.value = withDelay(500, withSpring(0));
        }
      });
    });

  return (
    <>
      <AppHeader
        title="Product Description"
        leftIcon="keyboard-backspace"
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={Gesture.Exclusive(doubleTap, singleTap)}>
          <Animated.View>
            <Image source={item.image} style={[styles.img]} />
            <Animated.Image
              source={require('../../../assets/images/heart.png')}
              style={[styles.likeIcon, rStyle]}
            />
            <Animated.Text style={[styles.text, rTextStyle]}>
              Double Tab to Like ♡
            </Animated.Text>
          </Animated.View>
        </GestureDetector>
        <View style={{flex: 1, marginTop: 20}}>
          <View>
            <Text style={styles.productTitle}>{item.title}</Text>
          </View>
          <Text style={{fontSize: 17, color: Colors.black}}>
            {item.description}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.price}>{`$${item.price}`}</Text>
            <Text style={styles.payableText}>Total Payable</Text>
          </View>

          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  img: {
    alignSelf: 'center',
    width: width * 0.6,
    height: height * 0.3,
  },
  likeIcon: {
    width: 70,
    height: 70,
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },

  productTitle: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomContainer: {
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    color: Colors.black,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  payableText: {
    fontSize: 16,
    fontWeight: 'bold',
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
