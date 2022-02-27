import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import ArrowIosBackOutline from '../assets/images/svg/ArrowIosBackOutline';
import {colors} from '../assets/colors';
import {fontFamily} from '../assets/typographyAsset';
import {EmailFill, EyeSlash, Lock, UserProfile} from '../assets/images/svg';

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

const CreateAccount = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goBack = () => navigation.goBack();

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
      <TextInputUnderline
        value={password}
        onChangeText={setPassword}
        icon={<Lock />}
        placeholder="Password"
        iconRight={<EyeSlash />}
        isSecure
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
