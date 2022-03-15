/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors} from '../assets/colors';
import {images} from '../assets/images/images';
import {ArrowDropDownCircle} from '../assets/images/svg';
import {
  buttonLargeTypography,
  fontFamily,
  largeTypography,
  regularTypography,
  semiMediumTypography,
} from '../assets/typographyAsset';
import BaseContainer from '../components/atoms/BaseContainer';
import ButtonFill from '../components/atoms/ButtonFill';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import Margin from '../components/atoms/Margin';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import TypographyText from '../components/atoms/TypographyText';
import Dropdown from '../components/molecules/Dropdown';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const Profile = () => {
  const [chooseType, setChooseType] = useState(false);
  const [chooseVehicle, setChooseVehicle] = useState(false);

  const typeHandler = () => {
    setChooseType(!chooseType);
    if (!chooseType) {
      setChooseVehicle(false);
    }
  };

  const vehicleHandler = () => {
    setChooseVehicle(!chooseVehicle);
    if (!chooseVehicle) {
      setChooseType(false);
    }
  };

  return (
    <BaseContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaddingHorizontal>
          <TypographyText
            text="Welcome, John Richard"
            color={colors.white}
            {...largeTypography}
          />
          <TypographyText
            text="Let's Start by setting your account"
            color={colors.white}
            {...regularTypography}
          />
          <Margin margin={20} />
          <View>
            <Image
              source={images.carImage}
              style={styles.imageResize}
              resizeMode="contain"
            />
          </View>
          <Margin margin={30} />
          <TypographyText
            text="Add Your Vehicle"
            color={colors.white}
            {...largeTypography}
          />

          <Margin margin={10} />
          <View style={{zIndex: 2}}>
            <TouchableOpacity style={styles.cardDropdown} onPress={typeHandler}>
              <FlexRowContainer justifyContent="space-between">
                <View>
                  <TypographyText
                    text="Vehicle Type"
                    color={colors.grey}
                    {...regularTypography}
                    fontFamily={fontFamily.PoppinsMedium}
                  />
                  <Margin margin={10} />
                  <TypographyText
                    text="Car - Sedan"
                    color={colors.white}
                    {...semiMediumTypography}
                  />
                </View>
                <TouchableOpacity onPress={typeHandler}>
                  <ArrowDropDownCircle />
                </TouchableOpacity>
              </FlexRowContainer>
            </TouchableOpacity>
            <Dropdown visible={chooseType} />
          </View>

          <Margin margin={20} />
          <View style={styles.cardDropdown}>
            <View>
              <TypographyText
                text="Vehicle License No"
                color={colors.grey}
                {...regularTypography}
                fontFamily={fontFamily.PoppinsMedium}
              />
              <Margin margin={10} />
              <TypographyText
                text="PA 32 A 5512"
                color={colors.white}
                {...semiMediumTypography}
              />
            </View>
          </View>

          <Margin margin={20} />
          <View style={{zIndex: 2}}>
            <TouchableOpacity
              style={styles.cardDropdown}
              onPress={vehicleHandler}>
              <FlexRowContainer justifyContent="space-between">
                <View>
                  <TypographyText
                    text="Vehicle XYZ"
                    color={colors.grey}
                    {...regularTypography}
                    fontFamily={fontFamily.PoppinsMedium}
                  />
                  <Margin margin={10} />
                  <TypographyText
                    text="My Ceitos"
                    color={colors.white}
                    {...semiMediumTypography}
                  />
                </View>
                <TouchableOpacity onPress={vehicleHandler}>
                  <ArrowDropDownCircle />
                </TouchableOpacity>
              </FlexRowContainer>
            </TouchableOpacity>
            <Dropdown visible={chooseVehicle} />
          </View>

          <Margin margin={33} />
          <ButtonFill
            backgroundColor={colors.yellow}
            paddingVertical={responsiveHeight(14)}
            borderRadius={responsiveWidth(10)}
            text="Get Started"
            {...buttonLargeTypography}
          />
        </PaddingHorizontal>
        <Margin margin={100} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageResize: {
    width: responsiveWidth(388),
    height: responsiveHeight(200),
  },
  cardDropdown: {
    borderWidth: 1,
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    borderColor: colors.greyBorderColor,
  },
});
