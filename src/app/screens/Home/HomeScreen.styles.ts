import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'; // adjust if your folder depth is different

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
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
    color: COLORS.dark,
    marginBottom: 18,
    textAlign: 'center',
  },

  /* Cars row */
  carsRow: {
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  carItem: {
    width: 70,
    alignItems: 'center',
  },

  carCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff', // Optional: If you want, I can convert this too
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Form */
  form: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 16,

    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  inputLabel: {
    fontSize: 12,
    color: '#666', // optional to theme
    marginBottom: 6,
  },

  inputTouchable: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e6e6e6', // optional to theme
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },

  inputTouchableText: {
    fontSize: 14,
    color: COLORS.dark,
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
    borderColor: '#ccc', // optional to theme
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  checkboxChecked: {
    borderColor: COLORS.primary,
  },

  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: COLORS.primary,
  },

  refundTextWrap: {
    flex: 1,
  },

  refundTextBold: {
    fontSize: 14,
    color: COLORS.dark,
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
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 15,
  },
});

export default styles;
