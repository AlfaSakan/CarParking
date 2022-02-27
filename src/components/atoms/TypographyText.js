import React from 'react';
import {Text} from 'react-native';

const TypographyText = ({
  text = 'Text',
  fontFamily,
  fontSize,
  lineHeight,
  textAlign,
  color,
}) => {
  return (
    <Text style={{fontFamily, fontSize, lineHeight, textAlign, color}}>
      {text}
    </Text>
  );
};

export default TypographyText;
