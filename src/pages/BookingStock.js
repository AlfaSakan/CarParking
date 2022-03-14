import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import BaseContainer from '../components/atoms/BaseContainer';
import TypographyText from '../components/atoms/TypographyText';
import Header from '../components/molecules/Header';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import Margin from '../components/atoms/Margin';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';
import {colors} from '../assets/colors';
import {
  fontFamily,
  regularTypography,
  semiMediumTypography,
} from '../assets/typographyAsset';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import {images} from '../assets/images/images';
import {ArrowIosDownwardFill} from '../assets/images/svg';

const BookingStock = ({navigation}) => {
  const navigateBooing = () => {
    navigation.navigate('BookingConfirmation');
  };

  return (
    <BaseContainer>
      <ScrollView>
        <PaddingHorizontal>
          <Header navigation={navigation} text="Booking Slot" />
          <Margin margin={20} />
          <View
            style={{
              height: responsiveHeight(300),
              backgroundColor: colors.white,
              borderRadius: responsiveWidth(5),
            }}
          />
          <Margin margin={30} />
          <FlexRowContainer justifyContent="space-between">
            <View style={styles.textContainer}>
              <TypographyText
                color={colors.white}
                fontFamily={fontFamily.PoppinsMedium}
                fontSize={18}
                lineHeight={27}
                text="Letsby Avenue, Sheffield Top Roof Parking"
              />
            </View>
            <View>
              <TypographyText
                color={colors.white}
                {...regularTypography}
                fontFamily={fontFamily.PoppinsMedium}
                text="Fare"
                textAlign="right"
              />
              <TypographyText
                color={colors.white}
                fontFamily={fontFamily.PoppinsMedium}
                fontSize={18}
                lineHeight={27}
                text="49/hr"
              />
            </View>
          </FlexRowContainer>
          <Margin margin={10} />
          <FlexRowContainer>
            <TypographyText
              text="ETA"
              {...semiMediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
              color={colors.grey}
            />
            <TypographyText
              text=" 20 min"
              {...semiMediumTypography}
              fontFamily={fontFamily.PoppinsMedium}
              color={colors.white}
            />
          </FlexRowContainer>

          <Margin margin={20} />
          <TypographyText
            text="Time of Booking"
            color={colors.white}
            fontFamily={fontFamily.PoppinsSemiBold}
            fontSize={12}
            lineHeight={18}
          />

          <Margin margin={20} />
          <FlexRowContainer justifyContent="space-between">
            <View
              style={[styles.timeContainer, {marginLeft: responsiveWidth(20)}]}>
              <FlexRowContainer>
                <TypographyText
                  text="02:30"
                  color={colors.white}
                  fontFamily={fontFamily.PoppinsMedium}
                  fontSize={28}
                  lineHeight={42}
                />
                <View style={{marginLeft: responsiveWidth(10)}}>
                  <TypographyText text="am" color={colors.grey} />
                  <TypographyText text="pm" color={colors.white} />
                </View>
              </FlexRowContainer>
            </View>
            <View
              style={[
                styles.timeContainer,
                {marginRight: responsiveWidth(20)},
              ]}>
              <FlexRowContainer>
                <TypographyText
                  text="02 "
                  color={colors.white}
                  fontFamily={fontFamily.PoppinsMedium}
                  fontSize={28}
                  lineHeight={42}
                />
                <TypographyText
                  text="Hours"
                  color={colors.grey}
                  fontFamily={fontFamily.PoppinsMedium}
                  fontSize={28}
                  lineHeight={42}
                />
              </FlexRowContainer>
            </View>
          </FlexRowContainer>

          <Margin margin={30} />
          <FlexRowContainer>
            <TypographyText
              text="Alert me 30 mins before the parking ends."
              color={colors.white}
            />
          </FlexRowContainer>

          <Margin margin={10} />
          <TypographyText
            text="Note: Contray to popular belief, Lorem ipsum is not simply random text"
            color={colors.white}
          />

          <Margin margin={30} />
          <TypographyText
            text="Payment"
            color={colors.white}
            fontFamily={fontFamily.PoppinsSemiBold}
            fontSize={12}
            lineHeight={18}
          />

          <Margin margin={10} />
          <TouchableOpacity onPress={navigateBooing}>
            <View style={styles.cardPayment}>
              <FlexRowContainer justifyContent="space-between">
                <FlexRowContainer>
                  <Image
                    source={images.carImage}
                    style={styles.imgPayment}
                    resizeMode="cover"
                  />
                  <TypographyText
                    text="admin1212@gmail.com"
                    color={colors.white}
                    {...regularTypography}
                    fontFamily={fontFamily.PoppinsMedium}
                  />
                </FlexRowContainer>
                <ArrowIosDownwardFill height={35} />
              </FlexRowContainer>
            </View>
            <Margin margin={100} />
          </TouchableOpacity>
        </PaddingHorizontal>
      </ScrollView>
    </BaseContainer>
  );
};

export default BookingStock;

const styles = StyleSheet.create({
  textContainer: {
    width: '80%',
  },
  timeContainer: {
    backgroundColor: colors.greyBorderColor,
    width: responsiveWidth(160),
    height: responsiveHeight(60),
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPayment: {
    width: responsiveWidth(60),
    height: responsiveWidth(60),
    borderRadius: responsiveWidth(5),
    marginRight: responsiveWidth(20),
  },
  cardPayment: {
    backgroundColor: colors.greyBorderColor,
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveWidth(5),
  },
});
