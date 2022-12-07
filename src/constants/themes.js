import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  black: '#121212',
  white: '#FFFFFF',
  gray: '#5C5C5C',
  gray1: '#EEEEEE',
  gray2: '#F1F1F1',
  gray3: '#F9F9F9',
  gray4: 'rgb(246,246,246)',
  gray5: '#939598',
  gray5_50: '#93959850',
  gray5_90: '#93959890',
  red: '#E03021',
  grayOutRed: '#E0302140',
  grayOutRed1: '#E0302195',
  inactive_red: '#EE8F87',
  placeholder_gray: '#F1F1F180',
  placeholderTxt: '#1C1C1C',
  placeholder_border: '#dddddd',
  button_gray: '#cacaca',
  eyeIcon: '#C4C4C4',
  red_light: 'rgba(255, 61, 0, 0.19)',
  red_light2: 'rgba(255, 61, 0, 0.35)',
  yellow_light: 'rgba(255, 240, 194, 1)',
  blue_light: 'rgba(2, 119, 189, 0.2)',
  blue_gray: 'rgba(120, 144, 156, 0.2)',
  green: '#3BC351',
  greentext: '#79D688',
  success: '#ECFFEF',
  inactive_btn: '#d4d4d4',
};

export const SIZES = {
  //Global sizes
  base: 8,
  fonts: 14,
  radius: 12,
  padding: 24,

  //Font sizes
  h1: 48,
  title: 32,
  h2: 24,
  h3: 13,
  h4: 14,
  btn: 13,
  placeholder: 13,
  body2: 22,
  body3: 16,
  body4: 14,

  //App dimensions
  width,
  height,
};

export const FONTS = {
  h1: {
    fontFamily: 'serif',
    fontSize: SIZES.h1,
    lineHeight: 48,
  },
  h2: {
    fontFamily: 'serif',
    fontSize: SIZES.h2,
    lineHeight: 24,
  },
  h3: {fontFamily: 'serif', fontSize: SIZES.h3, lineHeight: 24},
  btn: {
    fontFamily: 'serif',
    fontWeight: '500',
    fontSize: SIZES.btn,
    lineHeight: 16,
  },
  title: {
    fontFamily: 'serif',
    fontSize: SIZES.title,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  placeholder: {
    fontFamily: 'serif',
    fontSize: SIZES.placeholder,
    lineHeight: 16,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
