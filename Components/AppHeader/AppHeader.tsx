import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../Utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppHeaderProps {
  title: string;
  rightIcon?: string;
  onRightPress?: () => void;
  leftIcon?: string;
  onLeftPress?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={[styles.iconContainer, leftIcon ? {opacity: 1} : {opacity: 0}]}
        onPress={onLeftPress}>
        <MaterialCommunityIcons
          name={leftIcon ? leftIcon : 'keyboard-backspace'}
          size={22}
          style={styles.icon}
        />
      </TouchableOpacity>

      {title && (
        <Text style={styles.headerText}>
          {title ? title : 'Header Name Here'}
        </Text>
      )}

      <TouchableOpacity
        style={[styles.iconContainer, rightIcon ? {opacity: 1} : {opacity: 0}]}
        onPress={onRightPress}>
        <MaterialCommunityIcons
          name={rightIcon ? rightIcon : 'keyboard-backspace'}
          size={22}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'Poppins-BlackItalic',
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 10,
  },
  icon: {
    color: Colors.white,
  },
});
