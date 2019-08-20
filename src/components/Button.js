import styled, { css } from 'styled-components'
import theme from '../constants/theme'

const setVariant = (props) => {
  switch (props.variant) {
  case 'outline':
    return css`
      color: ${props.color || theme.color.purple};
      border-color: ${props.color || theme.color.purple};
      background-color: ${theme.color.white};
    `
  case 'nude':
    return css`
      color: ${props.color || theme.color.purple};
      border-color: transparent;
      background-color: transparent;
    `

  default:
    return css`
      color: ${theme.color.white};
      border-color: ${theme.color.purple};
      background-color: ${theme.color.purple};
    `
  }
}

const setSize = (props) => {
  switch (props.size) {
  case 'sm':
    return css`
      height: 30px;
      padding: 2px 15px;
      font-size: 12px;
    `
  case 'md':
    return css`
      height: 40px;
      padding: 7px 15px;
      font-size: 15px;
    `
  case 'lg':
    return css`
      height: 50px;
      padding: 12px 15px;
      font-size: 20px;
    `

  default:
    return css`
      height: 40px;
      padding: 7px 15px;
      font-size: 15px;
    `
  }
}

const Button = styled.button`
  font-weight: 700;
  text-transform: none;
  position: relative;
  pointer-events: auto;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  width: ${(props) => (props.full ? '100%' : 'unset')};

  &:not(:first-child), &:not(:first-child) {
    margin-left: 10px;
  }

  ${setVariant}
  ${setSize}
`

export default Button
