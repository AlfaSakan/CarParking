import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {colors} from '../assets/colors';
import {
  BaselineCancel,
  ElectricCar,
  FacebookFillIcon,
  GoogleFillIcon,
} from '../assets/images/svg';
import {fontFamily} from '../assets/typographyAsset';
import Button from '../components/atoms/Button';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import TypographyText from '../components/atoms/TypographyText';
import Margin from '../components/atoms/Margin';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';
import ButtonFill from '../components/atoms/ButtonFill';
import ButtonIcon from '../components/atoms/ButtonIcon';
import BaseContainer from '../components/atoms/BaseContainer';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';

const boldText = {
  fontFamily: fontFamily.PoppinsBold,
  fontSize: 18,
  lineHeight: 27,
};

export const largeButtonText = {
  fontFamily: fontFamily.PoppinsBold,
  fontSize: 22,
  lineHeight: 33,
};

const Register = ({navigation}) => {
  const goBack = () => navigation.goBack();

  const toLoginScreen = () => {
    navigation.navigate('Login');
  };

  const navigateToCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <BaseContainer>
      <PaddingHorizontal>
        <View>
          <FlexRowContainer alignItems="center" justifyContent="space-between">
            <TouchableOpacity onPress={goBack}>
              <BaselineCancel
                width={responsiveWidth(35)}
                height={responsiveWidth(35)}
              />
            </TouchableOpacity>
            <Button
              text="Login"
              paddingHorizontal={responsiveWidth(33)}
              paddingTop={responsiveHeight(6)}
              paddingBottom={responsiveHeight(7)}
              borderColor={colors.yellow}
              borderRadius={responsiveWidth(10)}
              onPress={toLoginScreen}
            />
          </FlexRowContainer>
          <Margin margin={97} />
          <View style={{transform: [{scale: 0.9}]}}>
            <ElectricCar />
          </View>

          <Margin margin={91} />
          <ButtonFill
            text="CREATE ACCOUNT"
            backgroundColor={colors.yellow}
            paddingHorizontal={responsiveWidth(74)}
            paddingVertical={responsiveHeight(14)}
            borderRadius={responsiveWidth(10)}
            onPress={navigateToCreateAccount}
            isShadow
            {...largeButtonText}
          />

          <Margin margin={responsiveHeight(20)} />
          <TypographyText
            text="Or"
            color={colors.white}
            textAlign="center"
            {...boldText}
          />
          <Margin margin={responsiveHeight(20)} />
          <FlexRowContainer justifyContent="space-between" alignItems="center">
            <ButtonIcon
              text="Facebook"
              icon={<FacebookFillIcon />}
              paddingHorizontal={responsiveWidth(12.5)}
              paddingTop={responsiveHeight(17)}
              paddingBottom={responsiveHeight(16)}
              borderRadius={responsiveWidth(10)}
              backgroundColor={colors.blueFacebook}
              {...boldText}
            />
            <ButtonIcon
              text="Google"
              icon={<GoogleFillIcon />}
              paddingHorizontal={responsiveWidth(25)}
              paddingTop={responsiveHeight(17)}
              paddingBottom={responsiveHeight(16)}
              borderRadius={responsiveWidth(10)}
              backgroundColor={colors.blueGoogle}
              {...boldText}
            />
          </FlexRowContainer>
        </View>
      </PaddingHorizontal>
    </BaseContainer>
  );
};

export default Register;
