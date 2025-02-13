/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, Image} from 'react-native';
import styles from './styles';
import BaseColor from '../../config/colors';
import _ from 'lodash';
import {Images} from '../../config/images';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const CInput = React.forwardRef((props, ref) => {
  const {
    onSubmitEditing = () => {},
    placeholder = 'Default placeholder',
    onChangeText = () => {},
    secureTextEntry,
    editable = true,
    value,
    colorStyle,
    require,
    autoCapitalize,
    keyboardType,
    label,
    labelStyle,
    error,
    maxLength = 50,
    inputStyle,
    multiline = false,
    showError,
    showInfoMsg,
    errorMsg,
    showPassword,
    fieldIconName,
    setIsFocus = () => {},
    inputContainerStyle = {},
    ...rest
  } = props;

  const [isFocus, setisFocus] = useState(false);

  useEffect(() => {
    setIsFocus(isFocus);
  }, [isFocus, setIsFocus]);

  return (
    <View>
      {label ? (
        <Text style={[styles.labelStyle, labelStyle]}>
          {label}
          {require ? <Text style={styles.requiredStyle}>{'*'}</Text> : null}
        </Text>
      ) : null}

      <View style={[styles.mobileNumberContainer, inputContainerStyle]}>
        <TextInput
          {...rest}
          ref={ref}
          autoCapitalize={autoCapitalize}
          selectionColor={BaseColor.black}
          placeholder={placeholder}
          placeholderTextColor={BaseColor.textGray}
          style={[
            styles.input,
            {
              height: multiline ? 150 : 50,
            },
            multiline ? {textAlignVertical: 'top'} : null,
            inputStyle,
          ]}
          onChangeText={onChangeText}
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={secureTextEntry}
          editable={editable}
          value={value}
          maxLength={maxLength}
          keyboardType={keyboardType}
          multiline={multiline}
          onFocus={() => {
            setisFocus(true);
          }}
          onBlur={() => {
            setisFocus(false);
          }}
        />

        {fieldIconName ? (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.eyeIcon}
            onPress={() => {
              showPassword();
            }}>
            <Image
              source={secureTextEntry ? Images.eyeClose : Images.eye}
              style={styles.passwordIcon}
              load={false}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {showError ? <Text style={styles.errorMsg}>{errorMsg}</Text> : null}
      {showInfoMsg ? <Text style={styles.errorMsg}>{showInfoMsg}</Text> : null}
    </View>
  );
});

export default CInput;
