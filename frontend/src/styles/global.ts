import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

@font-face {
  font-family: Rubik;
  src: local(Rubik-Light),
    url('/fonts/Rubik-Light.ttf') format("truetype");
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;

}
@font-face {
  font-family: Rubik;
  src: local(Rubik-Regular),
    url('/fonts/Rubik-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;
}
@font-face {
  font-family: Rubik;
  src: local(Rubik-Medium),
      url('fonts/Rubik-Medium.ttf') format("truetype");
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;
}
@font-face {
  font-family: Linearicons;
  src: local(Linearicons),
      url('fonts/Linearicons.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.baseColorYellow};
      `}
    }
  `}

`

export default GlobalStyles
