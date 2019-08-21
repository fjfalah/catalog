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

  .fade-in {
    animation: Fade .3s ease-in;
    user-select: none;
    
    @keyframes Fade {
      from {
        opacity: 0;
        transform: scale(.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

export default GlobalStyles
