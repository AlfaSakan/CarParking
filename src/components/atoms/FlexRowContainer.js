import React from 'react';
import {View, StyleSheet} from 'react-native';

const FlexRowContainer = ({
  children,
  alignItems = 'center',
  justifyContent,
  width,
}) => {
  return (
    <View style={[styles.container, {justifyContent, alignItems, width}]}>
      {children}
    </View>
  );
};

export default FlexRowContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
