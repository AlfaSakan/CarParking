import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Clock, HomeIcon, User} from '../assets/images/svg';
import {colors} from '../assets/colors';
import {BookingStock, Home, Profile} from '../pages';
import {responsiveHeight, responsiveWidth} from '../utils/responsiveUI';

const Tab = createBottomTabNavigator();

export default function BottomNavbarStack({}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tabBarStyles, ...styles.shadow},
        tabBarIcon: ({focused, color, size}) => {
          const rn = route.name;

          switch (rn) {
            case 'Home':
              return (
                <View style={focused ? styles.backgroundIcon : {}}>
                  <View style={focused ? styles.positionIcon : {}}>
                    <HomeIcon width={30} height={30} />
                  </View>
                </View>
              );
            case 'Profile':
              return (
                <View style={focused ? styles.backgroundIcon : {}}>
                  <View style={focused ? styles.positionIcon : {}}>
                    <User width={30} height={30} />
                  </View>
                </View>
              );
            case 'BookingSlot':
              return (
                <View style={focused ? styles.backgroundIcon : {}}>
                  <View style={focused ? styles.positionIcon : {}}>
                    <Clock width={30} height={30} />
                  </View>
                </View>
              );
            default:
              return <HomeIcon width={30} height={30} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="BookingSlot"
        component={BookingStock}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  dotContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop: 3,
  },
  tabBarStyles: {
    elevation: 0,
    backgroundColor: colors.dark,
    height: responsiveHeight(100),
    paddingVertical: responsiveHeight(30),
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  img: {
    width: responsiveWidth(25),
    height: responsiveWidth(25),
  },
  backgroundIcon: {
    paddingVertical: responsiveHeight(40),
    paddingHorizontal: responsiveWidth(10),
  },
  positionIcon: {
    backgroundColor: colors.greyBorderColor,
    paddingTop: responsiveHeight(10),
    paddingHorizontal: responsiveWidth(10),
    paddingBottom: responsiveHeight(40),
    borderTopRightRadius: responsiveWidth(30),
    borderTopLeftRadius: responsiveWidth(30),
  },
});
