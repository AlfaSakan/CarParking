export const sentenceTitle = value => {
  value = value.split(' ');

  value = value.map(word => {
    return upperFirstChar(word);
  });

  return value.join(' ');
};

export const upperFirstChar = value => {
  return value[0].toUpperCase() + value.substring(1);
};

export const substringWord = value => {
  if (value.length < 20) {
    return value;
  }
  return value.substring(0, 20) + '....';
};
