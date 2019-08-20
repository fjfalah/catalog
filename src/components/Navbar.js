import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import theme from '../constants/theme'

const Root = styled(Flex)`
  top: 0;
  left: 0;
  position: fixed;
  height: 56px;
  width: 100%;
  background: ${theme.color.white};
  z-index: 1;
  box-shadow: rgba(17, 17, 17, 0.12) 0px 0px 8px 0px;
`

const NavbarWrapper = styled.div`
  max-width: ${theme.mobile.maxWidth};
  width: 100%;
  height: 100%;
`

const Navbar = ({ children }) => (
  <Root jc="center">
    <NavbarWrapper>
      {children}
    </NavbarWrapper>
  </Root>
)

export default Navbar
