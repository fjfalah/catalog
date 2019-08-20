import styled from 'styled-components'
import theme from '../constants/theme'

const Main = styled.main`
  position: relative;
  max-width: ${theme.mobile.maxWidth};
  width: 100%;
  z-index: -1;
  min-height: 100vh;
`

export default Main
