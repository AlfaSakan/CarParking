import React from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {EyeSlash, ShowIcon} from '../../assets/images/svg';
import {fontFamily} from '../../assets/typographyAsset';
import {responsiveWidth} from '../../utils/responsiveUI';
import FlexRowContainer from './FlexRowContainer';

const TextInputPassword = ({
  icon,
  placeholder,
  onPressIconRight,
  value,
  onChangeText,
  isSecure = false,
}) => {
  return (
    <View style={styles.container}>
      <FlexRowContainer justifyContent="space-between">
        <FlexRowContainer>
          {icon}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={colors.grey}
            secureTextEntry={isSecure}
          />
        </FlexRowContainer>
        <TouchableOpacity onPress={onPressIconRight}>
          {isSecure ? <EyeSlash /> : <ShowIcon />}
        </TouchableOpacity>
      </FlexRowContainer>
    </View>
  );
};

export default TextInputPassword;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: colors.greyBorderColor,
    paddingHorizontal: responsiveWidth(7),
  },
  textInput: {
    padding: responsiveWidth(10),
    fontFamily: fontFamily.PoppinsSemiBold,
    fontSize: 18,
    lineHeight: 27,
    marginHorizontal: responsiveWidth(5),
    color: colors.white,
    width: '85%',
  },
});
