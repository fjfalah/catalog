import React from 'react'
import styled from 'styled-components'
import theme from '../constants/theme'

const Select = styled.select`
  width: 100%;
  height: 40px;
  background: white;
  font-family: 'Rubik',sans-serif;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid ${theme.color.black60};
  outline: none;
  transform: .3 all ease;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 10px;
  &:focus {
    border: 1px solid ${theme.color.purple};
    transform: .3 all ease;
  }

  &::-ms-expand {
    display: none;
}
`

const InputSelect = (props) => {
  return (
    <Select {...props}>
      {props.children}
    </Select>
  )
}

export default InputSelect
