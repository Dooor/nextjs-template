// https://material.io/design/color/the-color-system.html#color-theme-creation

const ColorPalette = {
  GRAY_400: '#9e9e9e',
  GRAY_900: '#202124',
  GREEN_400: '#90EE02',
  PURPPLE_500: '#6002EE',
  PURPPLE_700: '#3d00e0',
  WHITE: '#FFFFFF',
};

const ThemeColor = {
  COMPLEMENTARY: ColorPalette.GREEN_400,
  PRIMARY: ColorPalette.PURPPLE_500,
  PRIMARY_DARK: ColorPalette.PURPPLE_700,
};

export default {
  BORDER: {
    WHITE: ColorPalette.WHITE,
  },
  HEADER: {
    BACKGROUND: ThemeColor.PRIMARY,
    INDICATOR: ColorPalette.WHITE,
  },
  TEXT: {
    BLACK: ColorPalette.GRAY_900,
    DARK: ColorPalette.GRAY_400,
    WHITE: ColorPalette.WHITE,
  },
};
