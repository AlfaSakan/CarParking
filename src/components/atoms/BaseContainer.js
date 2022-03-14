import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../assets/colors';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';

const {height, width} = Dimensions.get('window');

const BaseContainer = ({children, backgroundColor = colors.dark}) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      {children}
    </SafeAreaView>
  );
};

export default BaseContainer;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    // paddingTop: responsiveHeight(30),
    // paddingBottom: responsiveHeight(132),
  },
});
