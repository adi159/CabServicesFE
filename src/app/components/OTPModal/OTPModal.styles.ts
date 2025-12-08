import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  subTitle: { fontSize: 14, color: '#555', textAlign: 'center', marginBottom: 20 },
  otpInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 8,
    marginBottom: 20,
  },
  confirmBtn: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  confirmBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  cancelText: { color: '#FF3B30', fontSize: 16 },
});

export default styles;