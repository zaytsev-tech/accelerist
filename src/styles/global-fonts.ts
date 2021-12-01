import { createGlobalStyle } from 'styled-components';

import GothamRounded from '../assets/fonts/Gotham-Rounded-Medium.woff';
import Rubik from '../assets/fonts/rubik-v14-latin-regular.woff';

export const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'Gotham Rounded';
    src: url(${GothamRounded}) format('woff');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Rubik';
    src: url(${Rubik}) format('woff');
    font-style: normal;
    font-weight: 400;
  }
`;
