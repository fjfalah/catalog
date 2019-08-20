import { createGlobalStyle } from 'styled-components'
import theme from '../constants/theme'

const GlobalStyles = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.color.grey10};
    font-family: ${theme.font.rubik};
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
