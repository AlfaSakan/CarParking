import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../assets/colors';
import {
  buttonLargeTypography,
  fontFamily,
  mediumTypography,
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

const BookingConfirmation = ({navigation}) => {
  const toNavigationPage = () => {
    navigation.navigate('NavigationPage');
  };

  return (
    <BaseContainer>
      <ScrollView>
        <PaddingHorizontal>
          <Header text="Booing Confirmation" navigation={navigation} />
          <Margin margin={20} />
          <View style={styles.cardPayment}>
            <TypographyText
              text="Parking Place"
              color={colors.grey}
              {...semiMediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
            />
            <TypographyText
              text="F22"
              color={colors.white}
              {...mediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
            />
            <TypographyText
              text="Basement 1"
              color={colors.white}
              {...mediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
            />
            <Margin margin={15} />
            <TypographyText
              text="Booking Time"
              color={colors.grey}
              {...semiMediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
            />
            <TypographyText
              text="09:00am - 01:00pm"
              color={colors.white}
              {...mediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
            />
            <Margin margin={15} />
            <TypographyText
              text="Atleast alert me 30mins before ends"
              color={colors.grey}
              {...regularTypography}
            />
          </View>

          <Margin margin={20} />
          <View>
            <TypographyText
              text="Scan this QR code at the parking entrance"
              textAlign="center"
              color={colors.white}
              {...semiMediumTypography}
            />
            <TypographyText
              text="Or"
              textAlign="center"
              color={colors.grey}
              {...regularTypography}
              fontFamily={fontFamily.PoppinsBold}
            />
            <Margin margin={10} />
            <TypographyText
              text="Use the booking code"
              textAlign="center"
              color={colors.white}
              {...semiMediumTypography}
            />
            <TypographyText
              text="5630P12P0"
              color={colors.white}
              {...mediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
              textAlign="center"
            />
          </View>

          <Margin margin={10} />
          <ButtonFill
            text="Navigation"
            paddingVertical={responsiveHeight(14)}
            backgroundColor={colors.yellow}
            borderRadius={responsiveWidth(10)}
            onPress={toNavigationPage}
            {...buttonLargeTypography}
          />
        </PaddingHorizontal>
      </ScrollView>
    </BaseContainer>
  );
};

export default BookingConfirmation;

const styles = StyleSheet.create({
  cardPayment: {
    backgroundColor: colors.greyBorderColor,
    paddingVertical: responsiveHeight(20),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveWidth(5),
  },
});
