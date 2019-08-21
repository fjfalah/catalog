import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import theme from '../constants/theme'

const Root = styled(Flex)`
  padding: 10px;
`

const Item = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px 10px 0;
`

const Input = styled.input`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked ~ .check {
    border: 2px solid ${theme.color.purple};
    color: ${theme.color.purple};
  }
`

const Dot = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .3s;
  border: 2px solid ${theme.color.black60};
  color: ${theme.color.black60};
  padding: 5px 10px;
`

const InputSelectSize = (props) => {
  return (
    <Root fw="wrap">
      {
        props.data
          .sort((a, b) => a.order - b.order)
          .map((size, index) => {
            return (
              <Item key={index}>
                <Input
                  type="checkbox"
                  name={size.name}
                  value={size.name}
                  {...props}
                />
                <Dot className="check">
                  {size.name}
                </Dot>
              </Item>
            )
          })
      }
    </Root>
  )
}

export default InputSelectSize
