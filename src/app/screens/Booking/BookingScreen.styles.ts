import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'; // adjust if folder depth is different

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  hero: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },

  info: {
    paddingVertical: 6,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.dark,
  },

  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
  },

  model: {
    fontSize: 14,
    color: '#444', // Optional: can move to theme if you want
    marginTop: 6,
  },

  rating: {
    fontSize: 13,
    color: '#333', // Optional: can move to theme
    marginTop: 6,
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 6,
    color: COLORS.dark,
  },

  serving: {
    fontSize: 13,
    color: '#555', // Optional
  },

  photosRow: {
    flexDirection: 'row',
    marginTop: 6,
    gap: 8,
  },

  smallPhoto: {
    width: 100,
    height: 70,
    borderRadius: 8,
    marginRight: 8,
  },

  bookBtn: {
    marginTop: 18,
    height: 52,
    borderRadius: 10,
    backgroundColor: COLORS.primary, // replaced PRIMARY constant
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
  },

  err: {
    padding: 20,
    fontSize: 16,
    color: '#333', // Optional to theme
  },
});

export default styles;
