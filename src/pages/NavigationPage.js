import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {colors} from '../assets/colors';
import {images} from '../assets/images/images';
import {
  buttonLargeTypography,
  fontFamily,
  regularTypography,
  semiMediumTypography,
} from '../assets/typographyAsset';
import BaseContainer from '../components/atoms/BaseContainer';
import ButtonFill from '../components/atoms/ButtonFill';
import Margin from '../components/atoms/Margin';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import TypographyText from '../components/atoms/TypographyText';
import Header from '../components/molecules/Header';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const NavigationPage = ({navigation}) => {
  return (
    <BaseContainer>
      <ScrollView>
        <PaddingHorizontal>
          <Header text="Navigation" navigation={navigation} />
          <Margin margin={40} />
          <TypographyText
            text="F 22"
            textAlign="center"
            fontFamily={fontFamily.PoppinsSemiBold}
            fontSize={28}
            lineHeight={42}
            color={colors.white}
          />
          <TypographyText
            text="Basement 1"
            textAlign="center"
            fontFamily={fontFamily.PoppinsSemiBold}
            fontSize={28}
            lineHeight={42}
            color={colors.white}
          />
          <Margin margin={60} />
          <View>
            <Image
              source={images.ellipseCar}
              style={styles.cardRound}
              resizeMode="contain"
            />
          </View>
          <TypographyText
            text="Find your Spot"
            textAlign="center"
            color={colors.white}
            {...semiMediumTypography}
          />
          <TypographyText
            text="Follow the signal to reach your Distinated parking spot"
            textAlign="center"
            color={colors.white}
            {...regularTypography}
            fontFamily={fontFamily.PoppinsSemiBold}
          />

          <Margin margin={40} />
          <ButtonFill
            text="Park Your Vehicle"
            paddingVertical={responsiveHeight(14)}
            backgroundColor={colors.yellow}
            borderRadius={responsiveWidth(10)}
            {...buttonLargeTypography}
            // onPress={toNavigationPage}
          />
        </PaddingHorizontal>
      </ScrollView>
    </BaseContainer>
  );
};

export default NavigationPage;

const styles = StyleSheet.create({
  cardRound: {
    width: responsiveWidth(386),
    height: responsiveWidth(386),
  },
});
