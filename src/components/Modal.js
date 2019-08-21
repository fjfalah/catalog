import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '.'

const Root = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 480px;
  background: white;
  top: 0;
  z-index: 10;
  padding: 20px;
`

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .5);
  z-index: 9;
  top: 0;
  left: 0;
`

const ButtonClose = styled.div`
  > img {
    height: 20px;
  }
`

const Modal = ({ show, onClose, children }) => {
  return show && (
    <>
      <Background onClick={onClose} />
      <Root className="fade-in">
        <Flex jc="Flex-end">
          <ButtonClose onClick={onClose}>
            <img src={require('@/assets/icons/close-circular-button-symbol.svg')} alt="" />
          </ButtonClose>
        </Flex>
        <Box h="10" />
        {children}
      </Root>
    </>
  )
}

export default Modal
