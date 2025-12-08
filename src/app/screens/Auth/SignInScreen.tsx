import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './SignInScreen.styles';
import users from '../../data/users.json';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../../App';

import OTPModal from '../../components/OTPModal/OTPModal';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  const [otpVisible, setOtpVisible] = useState(false);

  const [error, setError] = useState('');

  const validate = () => {
    if (!email.trim()) {
      setError('Please enter your email.');
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!password.trim()) {
      setError('Please enter your password.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSignIn = () => {
    if (!validate()) return;

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      setError('Invalid email or password!');
      return;
    }

    // Success
    setError('');
    setOtpVisible(true);
    // TODO: navigation.replace("HomeTabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In to CabServices</Text>
      <Text style={styles.subtitle}>Welcome to CabServices.</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email ID"
        placeholderTextColor="#777"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input with Eye Icon */}
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry={secure}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecure((prev) => !prev)}
        >
          <Icon
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInBtn} activeOpacity={0.8} onPress={handleSignIn}>
        <Text style={styles.signInBtnText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerWrap}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>

      {/* Google Sign-In */}
      <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
        <Text style={styles.socialBtnText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Apple Sign-In */}
      {Platform.OS === 'ios' && (
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
          <Text style={styles.socialBtnText}>Sign in with Apple</Text>
        </TouchableOpacity>
      )}

      {/* Sign Up link */}
      <TouchableOpacity style={styles.footerWrap}>
        <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate('SignUp')}// Now TypeScript knows SignUp exists
        >
            Sign up
        </Text>
        </Text>
      </TouchableOpacity>

      <OTPModal
        visible={otpVisible}
        onClose={() => setOtpVisible(false)}
        onConfirm={() => {
            setOtpVisible(false);
            navigation.replace('MainTabs'); // After successful OTP, go to Home
        }}
      />
    </View>
  );
};

export default SignInScreen;
