import React, {useState} from 'react';
import {View} from 'react-native';

import {colors} from '../assets/colors';
import {EmailFill, Lock} from '../assets/images/svg';

import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

import BaseContainer from '../components/atoms/BaseContainer';
import TypographyText from '../components/atoms/TypographyText';
import Margin from '../components/atoms/Margin';
import TextInputUnderline from '../components/atoms/TextInputUnderline';
import ButtonFill from '../components/atoms/ButtonFill';
import TextInputPassword from '../components/atoms/TextInputPassword';
import {largeButtonText} from './Register';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import Header from '../components/molecules/Header';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const secureHandler = () => {
    setIsSecure(prev => !prev);
  };

  const loginHandler = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomNavbarStack'}],
    });
  };

  return (
    <BaseContainer>
      <PaddingHorizontal>
        <Header text="Log In" navigation={navigation} />

        <Margin margin={80} />
        <TextInputUnderline
          icon={<EmailFill />}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Margin margin={20} />
        <TextInputPassword
          icon={<Lock />}
          placeholder="Password"
          isSecure={isSecure}
          onPressIconRight={secureHandler}
          value={password}
          onChangeText={setPassword}
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
          onPress={loginHandler}
        />
      </PaddingHorizontal>
    </BaseContainer>
  );
};

export default Login;
