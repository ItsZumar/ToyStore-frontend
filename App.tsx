import {
  FavouritesScreen,
  HomeScreen,
  SettingsScreen,
  MainScreen,
  NotificationScreen,
  ProductDescription,
} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Contactus: undefined;
  Settings: undefined;
  NotificationScreen: undefined;
  ProductDescriptionScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contactus" component={FavouritesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen
          name="ProductDescriptionScreen"
          component={ProductDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
