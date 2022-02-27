import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import ArrowIosBackOutline from '../assets/images/svg/ArrowIosBackOutline';
import {colors} from '../assets/colors';
import {fontFamily} from '../assets/typographyAsset';
import {EmailFill, EyeSlash, Lock} from '../assets/images/svg';

import BaseContainer from '../components/atoms/BaseContainer';
import TypographyText from '../components/atoms/TypographyText';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import Margin from '../components/atoms/Margin';
import TextInputUnderline from '../components/atoms/TextInputUnderline';
import ButtonFill from '../components/atoms/ButtonFill';
import {largeButtonText} from './Register';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const loginText = {
  fontFamily: fontFamily.PoppinsSemiBold,
  fontSize: 20,
  lineHeight: 30,
};

const Login = ({navigation}) => {
  const goBack = () => navigation.goBack();

  return (
    <BaseContainer>
      <FlexRowContainer justifyContent="space-between" alignItems="center">
        <TouchableOpacity onPress={goBack}>
          <ArrowIosBackOutline />
        </TouchableOpacity>
        <TypographyText text="Log In" color={colors.white} {...loginText} />
        <View style={styles.hide}>
          <ArrowIosBackOutline />
        </View>
      </FlexRowContainer>
      <Margin margin={80} />
      <TextInputUnderline icon={<EmailFill />} placeholder="Email" />
      <Margin margin={20} />
      <TextInputUnderline
        icon={<Lock />}
        placeholder="Password"
        iconRight={<EyeSlash />}
        isSecure
      />
      <Margin margin={20} />
      <View style={{marginLeft: responsiveWidth(49)}}>
        <TypographyText
          text="Forget Password?"
          color={colors.grey}
          fontSize={15}
          lineHeight={22.5}
        />
      </View>
      <Margin margin={54} />
      <ButtonFill
        text="Log In"
        {...largeButtonText}
        paddingHorizontal={responsiveWidth(142)}
        paddingTop={responsiveHeight(13)}
        paddingBottom={responsiveHeight(14)}
        backgroundColor={colors.yellow}
        borderRadius={responsiveWidth(10)}
      />
    </BaseContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  hide: {
    opacity: 0,
  },
});
