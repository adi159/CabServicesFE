import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'; // adjust if folder depth is different

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    zIndex: 1000, // ensures dropdown appears above other elements
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: '#e6e6e6', // optional -> can be moved to theme
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: COLORS.white,
    color: COLORS.dark,
  },

  clearBtn: {
    marginLeft: 8,
    height: 36,
    width: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // can go to GRAY palette if needed
  },

  clearText: {
    fontSize: 20,
    color: '#666', // optional
    lineHeight: 20,
  },

  list: {
    maxHeight: 220,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#eee', // optional
    borderRadius: 8,
    marginTop: 6,
  },

  item: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2', // optional
  },

  itemText: {
    fontSize: 14,
    color: COLORS.dark,
  },
});

export default styles;
