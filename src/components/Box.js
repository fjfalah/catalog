import React from 'react'
import styled from 'styled-components'
import theme from '../constants/theme'

const Root = styled.div`
  display: flex;
  align-items: center;
  height: ${(props) => `${props.h}px`};
  width: 100%;
  > div {
    height: 1px;
    width: 100%;
    background: ${(props) => props.separatorColor || theme.color.grey10};
  }
`

const Box = ({ h, withSeparator, separatorColor }) => {
  return (
    <Root h={h} separatorColor={separatorColor}>
      {
        withSeparator && <div />
      }
    </Root>
  )
}
export default Box
