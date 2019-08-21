import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Navbar } from '@/components'
import { Filter } from '../../../containers'


const NavWrapper = styled(Flex)`
  height: 100%;

  > img {
    height: 37.75px;
  }
`

const FilterWrapper = styled(Flex)`
  img {
    height: 20px;
    margin-left: 15px;
  }
`

const ButtonFilter = styled.div`
  cursor: pointer;
`

const NavTop = () => {
  const [modalFilterToggle, setModalFilterToggle] = useState(false)
  return (
    <>
      <Filter show={modalFilterToggle} handleOnClose={setModalFilterToggle} />
      <Navbar>
        <NavWrapper ai="center" jc="space-between">
          <img src={require('@/assets/images/logo-sorabel.png')} alt="SORABEL" />
          <FilterWrapper>
            <ButtonFilter onClick={() => setModalFilterToggle(!modalFilterToggle)}>
              <img src={require('@/assets/icons/equalization.svg')} alt="" />
            </ButtonFilter>
          </FilterWrapper>
        </NavWrapper>
      </Navbar>
    </>
  )
}

export default NavTop
