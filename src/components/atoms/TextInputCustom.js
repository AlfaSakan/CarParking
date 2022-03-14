import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {EyeSlash, ShowIcon} from '../../assets/images/svg';
import {fontFamily} from '../../assets/typographyAsset';
import {responsiveWidth} from '../../utils/responsiveUI';
import FlexRowContainer from './FlexRowContainer';

const TextInputCustom = ({icon, placeholder, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
      />
    </View>
  );
};

export default TextInputCustom;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: colors.greyBorderColor,
    // paddingHorizontal: responsiveWidth(7),
  },
  textInput: {
    fontFamily: fontFamily.PoppinsSemiBold,
    fontSize: 18,
    lineHeight: 27,

    padding: responsiveWidth(16),
    borderRadius: responsiveWidth(10),
    backgroundColor: colors.white,
    width: responsiveWidth(318),
  },
});
