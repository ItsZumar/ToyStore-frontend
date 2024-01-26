import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {AppHeader, NotificationCard} from '../../../../Components';
import {NOTIFICATIONS_DATA, NOTIFICATIONS_I} from '../../../../constants/data';

interface NotificationScreenProps {
  navigation: any;
  route: any;
}

export const NotificationScreen: React.FC<NotificationScreenProps> = ({
  navigation,
  route,
}) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);

  const onDismiss = useCallback((notification: NOTIFICATIONS_I) => {
    setNotifications(notifications =>
      notifications.filter(item => item.id !== notification.id),
    );
  }, []);

  return (
    <>
      <AppHeader
        title="Notifications"
        leftIcon="keyboard-backspace"
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {notifications.map(item => (
          <View key={item.id}>
            <NotificationCard item={item} onDismiss={onDismiss} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
