import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/app/screens/Splash/SplashScreen';
import HomeScreen from './src/app/screens/Home/HomeScreen';
import ResultsScreen from './src/app/screens/Results/ResultsScreen';
import BookingScreen from './src/app/screens/Booking/BookingScreen';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Results: { source: { name: string }, destination: { name: string }, date: string, refund: boolean };
  Booking: { vehicleId: string; bookingMeta?: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
