import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import ArrowIosBackOutline from '../assets/images/svg/ArrowIosBackOutline';
import {colors} from '../assets/colors';
import {fontFamily} from '../assets/typographyAsset';
import {EmailFill, EyeSlash, Lock, UserProfile} from '../assets/images/svg';

import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

import BaseContainer from '../components/atoms/BaseContainer';
import TypographyText from '../components/atoms/TypographyText';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import Margin from '../components/atoms/Margin';
import TextInputUnderline from '../components/atoms/TextInputUnderline';
import ButtonFill from '../components/atoms/ButtonFill';
import {largeButtonText} from './Register';
import TextInputPassword from '../components/atoms/TextInputPassword';

const loginText = {
  fontFamily: fontFamily.PoppinsSemiBold,
  fontSize: 20,
  lineHeight: 30,
};

const CreateAccount = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const goBack = () => navigation.goBack();

  const secureHandler = () => {
    setIsSecure(prev => !prev);
  };

  const registHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <BaseContainer>
      <FlexRowContainer justifyContent="space-between" alignItems="center">
        <TouchableOpacity onPress={goBack}>
          <ArrowIosBackOutline />
        </TouchableOpacity>
        <TypographyText
          text="Create Account"
          color={colors.white}
          {...loginText}
        />
        <View style={styles.hide}>
          <ArrowIosBackOutline />
        </View>
      </FlexRowContainer>
      <Margin margin={80} />
      <TextInputUnderline
        value={name}
        onChangeText={setName}
        icon={<UserProfile />}
        placeholder="Name"
      />
      <Margin margin={20} />
      <TextInputUnderline
        value={email}
        onChangeText={setEmail}
        icon={<EmailFill />}
        placeholder="Email"
      />
      <Margin margin={20} />
      <TextInputPassword
        value={password}
        onChangeText={setPassword}
        icon={<Lock />}
        placeholder="Password"
        isSecure={isSecure}
        onPressIconRight={secureHandler}
      />

      <Margin margin={54} />
      <ButtonFill
        text="Sign up"
        {...largeButtonText}
        paddingHorizontal={responsiveWidth(142)}
        paddingTop={responsiveHeight(13)}
        paddingBottom={responsiveHeight(14)}
        backgroundColor={colors.yellow}
        borderRadius={responsiveWidth(10)}
        onPress={registHandler}
      />
    </BaseContainer>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  hide: {
    opacity: 0,
  },
});
