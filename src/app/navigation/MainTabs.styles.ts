import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabBar: {
    height: 62,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',

    // Modern floating effect
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
    borderRadius: 0,
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 11,
    marginTop: 2,
  },
});

export default styles;
