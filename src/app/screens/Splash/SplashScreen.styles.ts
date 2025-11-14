import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2b03f', // dark navy (change to brand color)
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;
