import { StyleSheet } from 'react-native';

const PRIMARY = '#f2b03f';

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  hero: { width: '100%', height: 200, borderRadius: 10, marginBottom: 12 },
  info: { paddingVertical: 6 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 20, fontWeight: '700', color: '#111' },
  price: { fontSize: 16, fontWeight: '700', color: '#111' },
  model: { fontSize: 14, color: '#444', marginTop: 6 },
  rating: { fontSize: 13, color: '#333', marginTop: 6 },

  sectionTitle: { fontSize: 14, fontWeight: '700', marginTop: 12, marginBottom: 6 },
  serving: { fontSize: 13, color: '#555' },

  photosRow: { flexDirection: 'row', marginTop: 6, gap: 8 },
  smallPhoto: { width: 100, height: 70, borderRadius: 8, marginRight: 8 },

  bookBtn: {
    marginTop: 18,
    height: 52,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookBtnText: { color: '#fff', fontWeight: '700', fontSize: 16 },

  err: { padding: 20, fontSize: 16, color: '#333' },
});

export default styles;
