import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StatusBar } from 'react-native';
import styles from './SplashScreen.styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    // Fade + slight scale-in animation
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();

    // After 2.5 seconds navigate to Home
    const t = setTimeout(() => navigation.replace('SignIn'), 2500);
    return () => clearTimeout(t);
  }, [navigation, opacity, scale]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={styles.container.backgroundColor} />
      <Animated.View style={[styles.logoWrapper, { opacity, transform: [{ scale }] }]}>
        <Text style={styles.title}>CabServices</Text>
      </Animated.View>

      <Text style={styles.subtitle}>Fast. Reliable. Safe.</Text>
    </View>
  );
};

export default SplashScreen;
