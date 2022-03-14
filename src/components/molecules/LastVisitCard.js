import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../assets/colors';
import {ArrowIosDownwardFill, Location} from '../../assets/images/svg';
import {
  regularTypography,
  semiMediumTypography,
} from '../../assets/typographyAsset';
import {sentenceTitle, substringWord} from '../../utils/formatWording';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveUI';
import FlexRowContainer from '../atoms/FlexRowContainer';
import Margin from '../atoms/Margin';
import TypographyText from '../atoms/TypographyText';

const LastVisitCard = ({
  text = 'orem ipsum dolor sit amet, consectetur adipiscing elit.',
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <FlexRowContainer justifyContent="space-between" alignItems="center">
          <FlexRowContainer>
            <Location width={24} height={24} />
            <View style={styles.textContainer}>
              <TypographyText
                text={substringWord(sentenceTitle(text))}
                {...semiMediumTypography}
              />
              <Margin margin={10} />
              <TypographyText
                text="5 Visit"
                color={colors.grey}
                {...regularTypography}
              />
            </View>
          </FlexRowContainer>
          <ArrowIosDownwardFill color="black" />
        </FlexRowContainer>
      </View>
    </TouchableOpacity>
  );
};

export default LastVisitCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(10),
    paddingVertical: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(20),
  },
  textContainer: {
    marginLeft: responsiveWidth(24),
  },
});
