// styled-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components'; // tslint:disable-line

import media from 'styled-media-query';

interface IThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, media };
export default styled;
