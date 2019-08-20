import React from 'react'
import styled from 'styled-components'
import theme from '../constants/theme'
import Flex from './Flex'

const Root = styled.div`
  padding: 10px;
  
  > div {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${theme.color.purple};
    margin: 0 2px;

    &:nth-last-child(1) {
      animation: loading .6s .1s linear infinite;
    }
    &:nth-last-child(2) {
      animation: loading .6s .2s linear infinite;
    }
    &:nth-last-child(3) {
      animation: loading .6s .3s linear infinite;
    }
  }
  

  @keyframes loading {
    0% { 
      transform: translate(0,0);
    }
    50% { 
      transform: translate(0,15px);
    }
    100% {
      transform: translate(0,0);
    }
}
`

const Loading = () => {
  return (
    <Flex jc="center">
      <Root>
        <div />
        <div />
        <div />
      </Root>
    </Flex>
  )
}

export default Loading
