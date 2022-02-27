import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector, useAppDispatch} from '../config/redux/app/hooks';

import {incremented} from '../config/redux/features/counterSlice';

const Home = ({navigation}) => {
  const {
    counter: {value, value2},
  } = useAppSelector(state => state);

  const dispatch = useAppDispatch();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(incremented());
          }}>
          <Text>Home Page {value}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
