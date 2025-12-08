import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SignUpScreen.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App';
import OTPModal from '../../components/OTPModal/OTPModal'

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePass, setSecurePass] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);
  const [otpVisible, setOtpVisible] = useState(false);

  const handleSignUp = () => {
    // Simple frontend validation
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Account created!');
    setOtpVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#777"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={securePass}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecurePass(!securePass)}
        >
          <Icon
            name={securePass ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          placeholderTextColor="#777"
          secureTextEntry={secureConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureConfirm(!secureConfirm)}
        >
          <Icon
            name={secureConfirm ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        By signing up you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity style={styles.signUpBtn} onPress={handleSignUp}>
        <Text style={styles.signUpBtnText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Social buttons */}
      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialBtnText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn}>
        <Text style={styles.socialBtnText}>Sign Up with Apple</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.signInLink} onPress={() => navigation.replace('SignIn')}>
          Sign In
        </Text>
      </Text>

      <OTPModal
        visible={otpVisible}
        onClose={() => setOtpVisible(false)}
        onConfirm={() => {
            setOtpVisible(false);
            Alert.alert('Success', 'Account created!');
            navigation.replace('SignIn'); // After OTP, go to SignIn
        }}
      />
    </ScrollView>
    
  );
};

export default SignUpScreen;
