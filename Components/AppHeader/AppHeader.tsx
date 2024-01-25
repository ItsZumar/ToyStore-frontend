import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Utils';

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
      {leftIcon && (
        <TouchableOpacity style={styles.iconContainer} onPress={onLeftPress}>
          <MaterialCommunityIcons
            name={leftIcon}
            size={22}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}

      {title && (
        <Text style={styles.headerText}>
          {title ? title : 'Header Name Here'}
        </Text>
      )}

      {rightIcon && (
        <TouchableOpacity style={styles.iconContainer} onPress={onRightPress}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={22}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // elevation: 6,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 10,
  },
  icon: {
    color: '#fff',
  },
});
