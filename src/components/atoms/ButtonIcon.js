import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/typographyAsset';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import TypographyText from './TypographyText';

const ButtonIcon = ({
  onPress,
  borderColor,
  paddingVertical,
  paddingBottom,
  paddingTop,
  paddingRight,
  paddingLeft,
  borderRadius,
  paddingHorizontal,
  backgroundColor,
  text,
  icon,
  width,
  height,
  ...props
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
            backgroundColor,
            width: responsiveWidth(width),
            height: responsiveHeight(height),
          },
        ]}>
        {icon}
        <View style={styles.textMargin}>
          <TypographyText
            text={text}
            color={colors.white}
            fontFamily={fontFamily.PoppinsLight}
            fontSize={18}
            lineHeight={27}
            {...props}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textMargin: {
    marginLeft: responsiveWidth(10),
  },
});
