import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/typographyAsset';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import TypographyText from './TypographyText';

const Button = ({
  text = 'text',
  borderColor,
  borderRadius,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            borderColor,
            paddingVertical,
            paddingBottom,
            paddingTop,
            paddingRight,
            paddingLeft,
            borderRadius,
            paddingHorizontal,
          },
        ]}>
        <TypographyText
          text={text}
          color={colors.white}
          fontFamily={fontFamily.PoppinsSemiBold}
          fontSize={18}
          lineHeight={27}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
