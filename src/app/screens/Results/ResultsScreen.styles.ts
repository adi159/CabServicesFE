import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'; // adjust path if your folder name is different

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: COLORS.primary
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.white,
  },

  headerSub: {
    fontSize: 13,
    color: COLORS.white,
    marginTop: 4,
  },

  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',

    elevation: 1, // Android shadow
    shadowColor: '#333', // iOS shadow
    shadowOpacity: 0.03,
    shadowRadius: 6,
  },

  photoWrap: {
    width: 110,
    height: 70,
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 12,
  },

  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  infoWrap: {
    flex: 1,
  },

  carName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.dark,
  },

  model: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  rating: {
    marginRight: 12,
    fontSize: 13,
    color: '#333',
  },

  seats: {
    marginRight: 12,
    fontSize: 13,
    color: '#333',
  },

  price: {
    marginLeft: 'auto',
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.dark,
  },

  serving: {
    marginTop: 8,
    fontSize: 12,
    color: '#777',
  },
});

export default styles;
