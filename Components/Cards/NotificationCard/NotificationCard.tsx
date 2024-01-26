import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NOTIFICATIONS_I} from '../../../constants/data';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: windowWidth} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -windowWidth * 0.3;
const LIST_ITEM_HEIGHT = 95;

interface NotificationCardI {
  item: NOTIFICATIONS_I;
  onDismiss?: (notification: NOTIFICATIONS_I) => void;
}

export const NotificationCard: React.FC<NotificationCardI> = ({
  item,
  onDismiss,
}) => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);

  const onPanGestureEvents = Gesture.Pan()
    .onChange(event => {
      translateX.value += event.changeX;
    })
    .onEnd(() => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-windowWidth);
        itemHeight.value = withTiming(0);
        opacity.value = withTiming(0, undefined, isFinished => {
          if (isFinished && onDismiss) {
            runOnJS(onDismiss)(item);
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      height: itemHeight.value,
      opacity: opacity.value,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  }, []);

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(
      translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0,
    );
    return {opacity};
  });

  return (
    <GestureHandlerRootView key={item.id}>
      <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
        <MaterialCommunityIcons name="delete" size={28} style={styles.icon} />
      </Animated.View>

      <GestureDetector gesture={onPanGestureEvents}>
        <Animated.View style={[styles.container, rStyle]}>
          <TouchableOpacity>
            <View style={styles.leftContainer}>
              <Image source={item.image} style={styles.img} />
              <Text numberOfLines={2} style={styles.description}>
                {item.description}
              </Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    elevation: 2,
    marginHorizontal: 20,
    borderRadius: 15,
    height: LIST_ITEM_HEIGHT,
    zIndex: 20,
    marginTop: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  description: {
    width: '70%',
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  date: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
  },
  iconContainer: {
    position: 'absolute',
    right: 30,
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    zIndex: 1,
  },
  icon: {
    justifyContent: 'center',
    color: 'red',
  },
});
