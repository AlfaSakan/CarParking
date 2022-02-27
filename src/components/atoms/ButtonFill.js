import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/typographyAsset';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import TypographyText from './TypographyText';

const ButtonFill = ({
  text = 'text',
  borderColor,
  borderRadius,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  backgroundColor,
  onPress,
  isShadow = false,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          isShadow && styles.shadow,
          {
            borderColor,
            paddingVertical,
            paddingBottom,
            paddingTop,
            paddingRight,
            paddingLeft,
            borderRadius,
            paddingHorizontal,
            backgroundColor,
          },
        ]}>
        <TypographyText
          text={text}
          color={colors.white}
          fontFamily={fontFamily.PoppinsSemiBold}
          fontSize={18}
          lineHeight={27}
          {...props}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonFill;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: colors.yellowShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
