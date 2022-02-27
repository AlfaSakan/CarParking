import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {ArrowIosDownwardFill} from '../../assets/images/svg';
import {responsiveWidth} from '../../utils/responsiveUI';

const ButtonCircleArrowRight = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ArrowIosDownwardFill />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCircleArrowRight;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    height: responsiveWidth(90),
    borderRadius: responsiveWidth(90),
    backgroundColor: colors.yellow,
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
