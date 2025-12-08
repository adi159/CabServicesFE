import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/app/screens/Splash/SplashScreen';
// import HomeScreen from './src/app/screens/Home/HomeScreen';
// import ResultsScreen from './src/app/screens/Results/ResultsScreen';
// import BookingScreen from './src/app/screens/Booking/BookingScreen';
import SignUpScreen from './src/app/screens/Auth/SignUpScreen';
import SignInScreen from './src/app/screens/Auth/SignInScreen';
import MainTabs from './src/app/navigation/MainTabs';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainTabs: undefined;
  // Results: { source: { name: string }, destination: { name: string }, date: string, refund: boolean };
  // Booking: { vehicleId: string; bookingMeta?: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        {/* <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
