import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App';
import styles from './ProfileScreen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>; // 'Home' = MainTabs stack

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      // Clear user session if stored
      await AsyncStorage.removeItem('userToken'); // optional, use your key
      navigation.replace('SignIn'); // replace stack to prevent back navigation
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutBtnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
