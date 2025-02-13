import {StyleSheet} from 'react-native';
import BaseColor from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BaseColor.white,
  },
  headerCon: {
    backgroundColor: BaseColor.gray1,
    alignItems: 'center',
    flex: 0.6,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagePlaceholder: {
    marginTop: 100,
  },
  placeholderImage: {
    width: 40,
    height: 40,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: BaseColor.lightGray,
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: BaseColor.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  signUpText: {
    color: BaseColor.black,
    fontSize: 12,
    fontWeight: 400,
  },
  signUpLink: {
    color: BaseColor.black,
    fontWeight: 400,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    width: '100%',
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: BaseColor.gray2,
  },
  orText: {
    color: BaseColor.gray2,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: BaseColor.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  guestButton: {
    padding: 10,
    alignItems: 'flex-end',
  },
  guestButtonText: {
    color: BaseColor.lightGray,
    fontSize: 12,
    fontWeight: 400,
  },
});
export default styles;
