import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
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
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {Menu} from './Menu';

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const {width: windowWidth} = Dimensions.get('window');
const THRESHOLD_VALUE = windowWidth * 0.5;
const TOUCH_SLOP = 5;
const TIME_TO_ACTIVATE_PAN = 400;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const translateX = useSharedValue(0);
  const touchStart = useSharedValue({x: 0, y: 0, time: 0});

  const panEvents = Gesture.Pan()
    .manualActivation(true)
    .onTouchesDown(e => {
      touchStart.value = {
        x: e.changedTouches[0].x,
        y: e.changedTouches[0].y,
        time: Date.now(),
      };
    })
    .onTouchesMove((e, state) => {
      if (Date.now() - touchStart.value.time > TIME_TO_ACTIVATE_PAN) {
        state.activate();
      } else if (
        Math.abs(touchStart.value.x - e.changedTouches[0].x) > TOUCH_SLOP ||
        Math.abs(touchStart.value.y - e.changedTouches[0].y) > TOUCH_SLOP
      ) {
        state.fail();
      }
    })
    .onChange(event => {
      translateX.value += event.changeX;
    })
    .onEnd(() => {
      if (translateX.value > THRESHOLD_VALUE) {
        translateX.value = withTiming(THRESHOLD_VALUE);
      } else if (translateX.value <= THRESHOLD_VALUE) {
        translateX.value = withTiming(0);
      }
    });

  const onRightPressHandler = () => {
    navigation.navigate('NotificationScreen');
  };

  const onLeftPressHandler = () => {
    if (translateX.value >= THRESHOLD_VALUE) {
      translateX.value = withTiming(0);
    } else if (translateX.value < THRESHOLD_VALUE) {
      translateX.value = withSpring(THRESHOLD_VALUE);
    }
  };

  const onToysCardPress = (item: PRODUCTS_DATA_I) => {
    navigation.navigate('ProductDescriptionScreen', {item});
  };

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      translateX.value,
      [0, THRESHOLD_VALUE],
      [0, 3],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          rotateY: `-${rotate}deg`,
        },
      ],
    };
  });

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.lightGrey,
          }}>
          <Menu />
          <GestureDetector gesture={panEvents}>
            <Animated.ScrollView
              style={[{flex: 1}, rStyle]}
              showsVerticalScrollIndicator={false}>
              <AppHeader
                title="Toys Store"
                rightIcon="bell"
                leftIcon="menu"
                onRightPress={onRightPressHandler}
                onLeftPress={onLeftPressHandler}
              />
              <View style={[styles.container]}>
                <SeeAllHeading title="Best Selling Toys" />
                <View
                  style={{
                    width: '93%',
                    alignSelf: 'center',
                  }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={PRODUCTS_DATA.slice(0, 4)}
                    contentContainerStyle={{
                      justifyContent: 'space-between',
                      gap: 10,
                    }}
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
              </View>
            </Animated.ScrollView>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
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
