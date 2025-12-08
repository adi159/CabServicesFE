import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 40,
    color: '#000',
  },

  logoutBtn: {
    backgroundColor: '#FF3B30', // red for logout
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 2, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  logoutBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
