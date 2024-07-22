const tintColorLight = '#85B8FF';
const tintColorDark = '#0C66E4';

export interface ColorSchema {
  text: string;
  contrast: string;
  background: string;
  tint: string;
};

export type ColorTheme = Record<'light' | 'dark', ColorSchema>

export const Colors: ColorTheme = {
  light: {
    text: '#11181C',
    contrast: '#EEEEEE',
    background: '#FFFFFF',
    tint: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    contrast: '#353636',
    background: '#151718',
    tint: tintColorDark,
  },
};
