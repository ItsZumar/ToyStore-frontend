// import React, {useState} from 'react';
// import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import {
//   Gesture,
//   GestureDetector,
//   GestureHandlerRootView,
// } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';

// const {width: windowWidth} = Dimensions.get('window');
// const SIZE = 150;

// export const PlayWithBox: React.FC = () => {
//   const animation = useSharedValue(0);
//   const translateY = useSharedValue(0);
//   const opacity = useSharedValue(0.7);
//   const [click, setClick] = useState(false);

//   const onPanGestureHandler = Gesture.Pan()
//     .onStart(() => {})
//     .onChange(event => {
//       translateY.value += event.changeY;
//     })
//     .onEnd(() => {
//       translateY.value = withTiming(0, {duration: 1000});
//     });

//   const onTapGestureHandler = Gesture.Tap().onBegin(() => {
//     opacity.value = withTiming(opacity.value == 1 ? 0.5 : 1, {
//       duration: 500,
//     });
//   });
//   // .onEnd(() => {
//   //   opacity.value = withTiming(0.7);
//   // });

//   const rStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//       transform: [
//         {
//           translateX: animation.value,
//         },
//         {
//           translateY: translateY.value,
//         },
//         {
//           rotate: `${translateY.value}deg`,
//         },
//       ],
//     };
//   }, []);

//   const onPressHandler = () => {
//     if (click) {
//       animation.value = withTiming(100);
//     } else {
//       animation.value = withTiming(-100);
//     }
//     setClick(!click);
//   };

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <GestureDetector gesture={onPanGestureHandler}>
//         <GestureDetector gesture={onTapGestureHandler}>
//           <Animated.View style={[styles.box, rStyle]}></Animated.View>
//         </GestureDetector>
//       </GestureDetector>
//       <TouchableOpacity style={styles.btnContainer} onPress={onPressHandler}>
//         <Text style={styles.btnText}>Move Horizontally</Text>
//       </TouchableOpacity>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: SIZE,
//     height: SIZE,
//     backgroundColor: 'blue',
//     borderRadius: 20,
//   },
//   btnContainer: {
//     width: windowWidth * 0.6,
//     borderColor: 'grey',
//     borderWidth: 1,
//     paddingVertical: 15,
//     marginVertical: 20,
//     borderRadius: 10,
//   },
//   btnText: {
//     textAlign: 'center',
//     textTransform: 'uppercase',
//     fontWeight: '700',
//     fontSize: 17,
//   },
// });
