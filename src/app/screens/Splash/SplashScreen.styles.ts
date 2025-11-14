import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
    color: COLORS.white,
    fontWeight: '700',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    color: COLORS.white,
    fontSize: 14,
  },
});

export default styles;
