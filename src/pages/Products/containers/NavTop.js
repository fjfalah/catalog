import React from 'react'
import styled from 'styled-components'
import { Flex, Navbar } from '@/components'


const NavWrapper = styled(Flex)`
  height: 100%;

  > img {
    height: 37.75px;
  }
`

const FilterWrapper = styled.div`
  img {
    height: 20px;
    margin-left: 15px;
  }
`

const NavTop = () => {
  return (
    <Navbar>
      <NavWrapper ai="center" jc="space-between">
        <img src={require('@/assets/images/logo-sorabel.png')} alt="SORABEL" />
        <FilterWrapper>
          <img src={require('@/assets/icons/search-interface-symbol.svg')} alt="" />
          <img src={require('@/assets/icons/equalization.svg')} alt="" />
        </FilterWrapper>
      </NavWrapper>
    </Navbar>
  )
}

export default NavTop
