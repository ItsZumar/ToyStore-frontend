import React from 'react';
import {Dimensions, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppHeader,
  MenuList,
  SeeAllHeading,
  ToysCard,
  TrendyCard,
} from '../../../Components';
import {
  MENU_LIST_DATA,
  MENU_LIST_I,
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

interface HomeScreenProps {
  navigation: any;
  route: any;
}

const {width: windowWidth} = Dimensions.get('window');
const THRESHOLD_VALUE = windowWidth * 0.5;

const Menu = () => (
  <View
    style={{
      flex: 1,
      marginTop: 20,
    }}>
    {MENU_LIST_DATA.map((menuItem: MENU_LIST_I) => (
      <MenuList menuItem={menuItem} />
    ))}
  </View>
);

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  const translateX = useSharedValue(0);

  const panEvents = Gesture.Pan()
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
            flexDirection: 'row',
          }}>
          <Animated.View style={{position: 'absolute'}}>
            <Menu />
          </Animated.View>
          <GestureDetector gesture={panEvents}>
            <Animated.View style={[{flex: 1}, rStyle]}>
              <AppHeader
                title="Toys Store"
                rightIcon="bell"
                leftIcon="menu"
                onRightPress={onRightPressHandler}
                onLeftPress={onLeftPressHandler}
              />
              <Animated.View style={[styles.container]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <SeeAllHeading title="Best Selling Toys" />
                  <View
                    style={{
                      width: '93%',
                      alignSelf: 'center',
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
                        <ToysCard
                          item={item}
                          onPressHandler={onToysCardPress}
                        />
                      )}
                      keyExtractor={item => item.id.toString()}
                    />
                  </View>
                  <SeeAllHeading title="Popular and trendy" />

                  <View style={styles.trendyCards}>
                    {TRENDY_PRODUCTS_DATA.slice(0, 4).map(product => (
                      <TrendyCard
                        product={product}
                        key={product.id.toString()}
                      />
                    ))}
                  </View>
                </ScrollView>
              </Animated.View>
            </Animated.View>
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
