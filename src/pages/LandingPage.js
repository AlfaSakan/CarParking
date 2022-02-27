import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../assets/colors';
import {images} from '../assets/images/images';
import {fontFamily} from '../assets/typographyAsset';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import Margin from '../components/atoms/Margin';
import TypographyText from '../components/atoms/TypographyText';
import ButtonCircleArrowRight from '../components/molecules/ButtonCircleArrowRight';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const {height, width} = Dimensions.get('window');

const boldTypography = {
  fontFamily: fontFamily.PoppinsBold,
  fontSize: 38,
  lineHeight: 57,
};

const LandingPage = ({navigation}) => {
  const nextScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.container}
        resizeMode="contain"
        source={images.slideScreen}>
        <View>
          <Image
            source={images.carLogo}
            style={styles.carLogo}
            resizeMode="contain"
          />
          <View style={styles.companyBrand}>
            <TypographyText
              text="XYZ"
              {...boldTypography}
              color={colors.yellow}
            />
            <TypographyText
              text="Company"
              {...boldTypography}
              color={colors.white}
            />
          </View>
        </View>
        <View style={styles.bottomSection}>
          <ButtonCircleArrowRight onPress={nextScreen} />
          <Margin margin={20} />
          <FlexRowContainer>
            <TypographyText {...boldTypography} text="Lets " />
            <TypographyText
              {...boldTypography}
              color={colors.white}
              text="Park"
            />
          </FlexRowContainer>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    paddingTop: responsiveHeight(60.8),
  },
  carLogo: {
    width: responsiveWidth(250),
    height: responsiveHeight(167.09),
  },
  companyBrand: {
    alignItems: 'center',
    bottom: 30,
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: responsiveHeight(263),
  },
});
