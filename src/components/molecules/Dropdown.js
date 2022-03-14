import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {LineSeparator} from '../../assets/images/svg';
import {semiMediumTypography} from '../../assets/typographyAsset';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

const dataDropdown = [
  'Car - HATCHBACK',
  'SUV - Crossover',
  'SUV - Crossover',
  'SUV - Crossover',
];

const Dropdown = ({visible, data = dataDropdown}) => {
  if (visible) {
    return (
      <ScrollView style={styles.container}>
        {data.map((car, index) => (
          <View key={index}>
            <TouchableOpacity>
              <TypographyText
                color={colors.white}
                text={car}
                {...semiMediumTypography}
              />
            </TouchableOpacity>
            {data.length !== index + 1 && (
              <View>
                <Margin margin={15} />
                <LineSeparator />
                <Margin margin={15} />
              </View>
            )}
          </View>
        ))}
        <Margin margin={50} />
      </ScrollView>
    );
  }
  return <View />;
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 85,
    right: 0,
    backgroundColor: colors.dark,
    paddingVertical: responsiveHeight(20),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    width: responsiveWidth(383),
    height: responsiveWidth(114),
    borderWidth: 1,
    borderColor: colors.black,

    // SHADOW IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // SHADOW ANDROID
    elevation: 5,
  },
});
