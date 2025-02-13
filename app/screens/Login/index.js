import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {getApiDataProgress} from '../../utils/apiHelper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import BaseSetting from '../../config/setting';
import {useDispatch} from 'react-redux';
import actions from '../../redux/auth/actions';
import styles from './styles';
import BaseColor from '../../config/colors';
import CInput from '../../components/CInput';
import _ from 'lodash';
import {Images} from '../../config/images';

const Login = ({navigation}) => {
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {setUserData, setAccessToken} = actions;

  const validateInputs = () => {
    let valid = true;
    if (!email.trim()) {
      valid = false;
      setEmailErr('Please enter email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      setEmailErr('Please enter valid email');
    } else {
      setEmailErr('');
    }

    if (!password.trim()) {
      valid = false;
      setPasswordErr('Please enter password');
    } else if (password.length < 6) {
      valid = false;
      setPasswordErr('Password must be at least 6 characters');
    } else {
      setPasswordErr('');
    }
    if (valid) {
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);

      const data = {
        email: email.trim().toLowerCase(),
        password: password,
      };

      const response = await getApiDataProgress(
        BaseSetting.endpoints.login,
        'post',
        data,
      );

      if (response.success) {
        setEmail('');
        setPassword('');
        setEmailErr('');
        setPasswordErr('');
        dispatch(setUserData(response?.data));
        dispatch(setAccessToken(response?.data?.token));
        navigation.navigate('Events');
      } else {
        console.log('else login error', response?.message);
        Toast.show({
          type: 'error',
          text1: response?.message,
        });
      }
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={BaseColor.gray1}
        translucent={true}
      />
      <SafeAreaView
        style={[
          styles.container,
          {
            paddingTop: StatusBar.currentHeight,
          },
        ]}>
        <View style={styles.headerCon}>
          <Text style={styles.logo}>Pliē</Text>
          <View style={styles.imagePlaceholder}>
            <MaterialCommunityIcons
              name="view-gallery"
              color={BaseColor.black}
              size={50}
            />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : null}
          style={styles.mainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            bounces={false}>
            <CInput
              placeholder={'email@email.com'}
              label={'Email'}
              value={email}
              onChangeText={value => {
                setEmail(value);
              }}
              errorMsg={emailErr}
              showError={!_.isEmpty(emailErr)}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <View style={styles.passwordContainer}>
              <CInput
                ref={passwordRef}
                placeholder={'Password'}
                label={'Password'}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
                secureTextEntry={!showPassword}
                showPassword={() => {
                  setShowPassword(!showPassword);
                }}
                fieldIconName="eye"
                errorMsg={passwordErr}
                showError={!_.isEmpty(passwordErr)}
                onSubmitEditing={() => validateInputs()}
              />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => {
                validateInputs();
              }}>
              {loading ? (
                <ActivityIndicator size={'small'} color={BaseColor.white} />
              ) : (
                <Text style={styles.signInButtonText}>Sign In</Text>
              )}
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Not a member?</Text>
              <TouchableOpacity>
                <Text style={styles.signUpLink}>Sign Up Here</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.socialLoginContainer}>
              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>or Sign in with</Text>
                <View style={styles.divider} />
              </View>
              <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={Images.google} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={Images.apple} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={Images.facebook} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.guestButton}>
              <Text style={styles.guestButtonText}>Enter as Guest</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default Login;
