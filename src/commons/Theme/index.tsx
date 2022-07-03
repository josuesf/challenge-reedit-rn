import {createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
  grey: '#ACACAC',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    black: palette.black,
    grey0: palette.grey,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      // fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
    header: {
      // fontFamily: 'ShopifySans-Bold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      // fontFamily: 'ShopifySans-SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: 'black',
    },
    body: {
      // fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
    label: {
      // fontFamily: 'ShopifySans',
      fontSize: 12,
      lineHeight: 16,
      color: 'black',
    },
  },
});

export type Theme = typeof theme;
export default theme;
