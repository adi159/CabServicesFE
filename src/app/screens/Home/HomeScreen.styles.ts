import { StyleSheet } from 'react-native';

const PRIMARY = '#f2b03f';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  /* Title */
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111',
    marginBottom: 18,
  },

  /* Cars row */
  carsRow: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  carItem: {
    width: 80,
    alignItems: 'center',
  },
  carCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff7e6',
    borderWidth: 1,
    borderColor: '#f0d4a3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Form */
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  inputLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },

  inputTouchable: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputTouchableText: {
    fontSize: 14,
    color: '#111',
  },

  /* Refund row */
  refundRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    borderColor: PRIMARY,
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: PRIMARY,
  },
  refundTextWrap: {
    flex: 1,
  },
  refundTextBold: {
    fontSize: 14,
    color: '#111',
  },
  refundNoteSmall: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
    textTransform: 'lowercase',
  },

  /* Search button */
  searchBtn: {
    marginTop: 18,
    height: 46,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default styles;
