import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './OTPModal.styles';

type OTPModalProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void; // callback when OTP is correct
};

const OTPModal: React.FC<OTPModalProps> = ({ visible, onClose, onConfirm }) => {
  const [otp, setOtp] = useState<string>('');

  const handleConfirm = () => {
    if (otp === '112233') {
      onConfirm();
      setOtp('');
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct OTP.');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subTitle}>A 6-digit OTP has been sent to your registered email or number</Text>

          <TextInput
            style={styles.otpInput}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
          />

          <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
            <Text style={styles.confirmBtnText}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} style={{ marginTop: 12 }}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default OTPModal;
