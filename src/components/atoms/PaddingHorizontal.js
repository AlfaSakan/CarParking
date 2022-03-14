import React from 'react';
import {View, StyleSheet} from 'react-native';
import {responsiveWidth} from '../../utils/responsiveUI';

const PaddingHorizontal = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default PaddingHorizontal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(20),
  },
});
