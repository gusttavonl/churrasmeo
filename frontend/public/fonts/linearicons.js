import { createGlobalStyle } from 'styled-components';

import LineariconsTtf from '~/styles/fonts/Linearicons.ttf';
import LineariconsWoff from '~/styles/fonts/Linearicons.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Linearicons';
    font-weight: normal;
    font-style: normal;
    src: local('Linearicons'), local('Linearicons'),
      url(${LineariconsWoff}) format('woff'),
      url(${LineariconsTtf}) format('truetype');
  }
  `;
