import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },

  subtitle: {
    marginTop: 6,
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
  },

  errorText: {
    color: 'red',
    marginBottom: 12,
    fontSize: 14,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 15,
    color: '#000',
  },

  /* Password input with icon */
  passwordWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 14,
    paddingRight: 12,
  },

  passwordInput: {
    flex: 1,
    height: 52,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#000',
  },

  eyeIcon: {
    padding: 4,
  },

  signInBtn: {
    width: '100%',
    height: 52,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  signInBtnText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
  },

  dividerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E2E2',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#333',
    fontSize: 14,
  },

  socialBtn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  socialBtnText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },

  footerWrap: {
    marginTop: 25,
  },

  footerText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },

  signupLink: {
    color: '#0066FF',
    fontWeight: '600',
  },
});

export default styles;
