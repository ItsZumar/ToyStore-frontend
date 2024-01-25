import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../Utils';

interface SeeAllHeadingProps {
  title: string;
  onRightPress?: () => void;
}

const SeeAllHeading = ({title, onRightPress}: SeeAllHeadingProps) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingText}>{title}</Text>
      <TouchableOpacity onPress={onRightPress}>
        <Text style={{color: Colors.primary}}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export {SeeAllHeading};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headingText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
