import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    marginBottom: 24,
    color: '#000',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 8,
  },
  termsText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  signUpBtn: {
    width: '100%',
    height: 52,
    backgroundColor: '#0066FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  signUpBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  socialBtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  socialBtnText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
  },
  signInLink: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
