import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../assets/colors';
import {SearchOutline} from '../assets/images/svg';
import {largeTypography, semiMediumTypography} from '../assets/typographyAsset';
import BaseContainer from '../components/atoms/BaseContainer';
import FlexRowContainer from '../components/atoms/FlexRowContainer';
import Margin from '../components/atoms/Margin';
import PaddingHorizontal from '../components/atoms/PaddingHorizontal';
import TextInputCustom from '../components/atoms/TextInputCustom';
import TypographyText from '../components/atoms/TypographyText';
import LastVisitCard from '../components/molecules/LastVisitCard';

import {sentenceTitle} from '../utils/formatWording';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');

  return (
    <BaseContainer>
      <ScrollView>
        <PaddingHorizontal>
          <TypographyText
            text={sentenceTitle(
              'orem ipsum dolor sit amet, consectetur adipiscing elit.',
            )}
            color={colors.white}
            {...largeTypography}
          />
          <Margin margin={20} />
          <FlexRowContainer>
            <TextInputCustom
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
            />
            <View style={styles.searchContainer}>
              <SearchOutline width={40} height={40} />
            </View>
          </FlexRowContainer>
          <Margin margin={30} />
        </PaddingHorizontal>
        <View style={styles.bodyContainer}>
          <TypographyText
            text="Last Visit"
            color={colors.white}
            {...semiMediumTypography}
          />
          <Margin margin={10} />
          <LastVisitCard />
          <Margin margin={10} />
          <LastVisitCard />
          <Margin margin={30} />
          <TypographyText
            text="Near me"
            color={colors.white}
            {...semiMediumTypography}
          />
          <Margin margin={20} />
          <View
            style={{
              height: responsiveHeight(300),
              backgroundColor: colors.white,
              borderRadius: responsiveWidth(5),
            }}
          />
          <Margin margin={10} />
        </View>
        <Margin margin={60} />
      </ScrollView>
    </BaseContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    padding: responsiveWidth(15),
    backgroundColor: colors.greyBorderColor,
    borderRadius: responsiveWidth(10),
    marginLeft: responsiveWidth(5),
  },
  bodyContainer: {
    backgroundColor: colors.greyBorderColor,
    padding: responsiveWidth(20),
  },
});
