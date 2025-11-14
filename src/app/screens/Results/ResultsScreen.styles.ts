import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#111' },
  headerSub: { fontSize: 13, color: '#666', marginTop: 4 },

  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
  },
  photoWrap: { width: 110, height: 70, overflow: 'hidden', borderRadius: 8, marginRight: 12 },
  photo: { width: '100%', height: '100%', resizeMode: 'cover' },

  infoWrap: { flex: 1 },
  carName: { fontSize: 16, fontWeight: '700', color: '#111' },
  model: { fontSize: 13, color: '#555', marginTop: 2 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  rating: { marginRight: 12, fontSize: 13, color: '#333' },
  seats: { marginRight: 12, fontSize: 13, color: '#333' },
  price: { marginLeft: 'auto', fontSize: 13, fontWeight: '700', color: '#111' },
  serving: { marginTop: 8, fontSize: 12, color: '#777' },
});

export default styles;
