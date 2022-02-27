import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const responsiveWidth = value => {
  if (!value) {
    return;
  }

  return (value / 428) * width;
};

export const responsiveHeight = value => {
  if (!value) {
    return;
  }
  return (value / 928) * height;
};
