import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'
import { helpers } from '../libraries'

const Root = styled(Flex)`
  padding: 10px;
`

const Item = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px 10px 0;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  box-shadow: rgba(17,17,17,0.12) 0px 0px 8px 0px;
`

const Input = styled.input`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:checked ~ .check {
    width: 35px;
    height: 35px;
    border-radius: 20px;

    ::after {
      content: '';
      height: 8px;
      width: 4px;
      border: 2px solid ${(props) => (props.bg === 'white' || props.bg === 'yellow' ? 'black' : 'white')};
      border-width: 0 1.5px 1.5px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      transition: all .3s;
    }
  }
`

const Dot = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.background};
  transition: all .3s;

  
`

const InputSelectColor = (props) => {
  return (
    <Root fw="wrap">
      {
        props.data
          .filter((color) => color.key !== 'cream' && color.key !== 'mixed')
          .map((color, index) => {
            return (
              <Item key={index} background={color.key}>
                <Input
                  type="checkbox"
                  name={helpers.toSentenceCase(color.key)}
                  value={color.name}
                  bg={color.key}
                  {...props}
                />
                <Dot className="check" background={color.key} />
              </Item>
            )
          })
      }
    </Root>
  )
}

export default InputSelectColor
