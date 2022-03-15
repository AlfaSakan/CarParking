import React, {useState} from 'react';

import {colors} from '../assets/colors';
import {EmailFill, Lock, UserProfile} from '../assets/images/svg';

import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

import BaseContainer from '../components/atoms/BaseContainer';
import Margin from '../components/atoms/Margin';
import TextInputUnderline from '../components/atoms/TextInputUnderline';
import ButtonFill from '../components/atoms/ButtonFill';
import {largeButtonText} from './Register';
import TextInputPassword from '../components/atoms/TextInputPassword';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import Header from '../components/molecules/Header';

const CreateAccount = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);

  const secureHandler = () => {
    setIsSecure(prev => !prev);
  };

  const registHandler = () => {
    // navigation.popToTop();
    // navigation.replace('BottomNavbarStack', {screen: 'Home'});
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomNavbarStack'}],
    });
  };

  return (
    <BaseContainer>
      <PaddingHorizontal>
        <Header text="Create Account" navigation={navigation} />

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
      </PaddingHorizontal>
    </BaseContainer>
  );
};

export default CreateAccount;
