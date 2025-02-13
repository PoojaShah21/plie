import {Platform, StyleSheet} from 'react-native';
import BaseColor from '../../config/colors';

const styles = StyleSheet.create({
  input: {
    color: BaseColor.black,
    overflow: 'hidden',
    width: '100%',
    fontSize: 14,
    fontWeight: 400,
  },
  labelStyle: {
    fontSize: 16,
    color: BaseColor.lightBlack,
    fontWeight: 400,
  },
  requiredStyle: {
    fontSize: 16,
    color: BaseColor.alertRed,
  },
  mobileNumberContainer: {
    backgroundColor: BaseColor.white,
    borderRadius: 1,
    marginVertical: 10,
    flexDirection: 'row',
    elevation: 5,
    paddingLeft: 10,
  },
  passwordIcon: {
    width: 25,
    height: 20,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  errorMsg: {
    color: BaseColor.alertRed,
    fontSize: 12,
  },
});

export default styles;
