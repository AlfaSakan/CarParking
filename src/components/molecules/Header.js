import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {ArrowIosBackOutline} from '../../assets/images/svg';
import {fontFamily} from '../../assets/typographyAsset';
import FlexRowContainer from '../atoms/FlexRowContainer';
import TypographyText from '../atoms/TypographyText';

const loginText = {
  fontFamily: fontFamily.PoppinsSemiBold,
  fontSize: 20,
  lineHeight: 30,
};

const Header = ({navigation, text = 'title'}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <FlexRowContainer justifyContent="space-between" alignItems="center">
      <TouchableOpacity onPress={goBack}>
        <ArrowIosBackOutline />
      </TouchableOpacity>
      <TypographyText text={text} color={colors.white} {...loginText} />
      <View style={styles.hide}>
        <ArrowIosBackOutline />
      </View>
    </FlexRowContainer>
  );
};

export default Header;

const styles = StyleSheet.create({
  hide: {
    opacity: 0,
  },
});
