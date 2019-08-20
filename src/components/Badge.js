import React from 'react'
import styled from 'styled-components'
import theme from '../constants/theme'

const Root = styled.span`
  border-radius: 4px;
  color: ${(props) => props.color || theme.color.white};
  background: ${(props) => props.background || theme.color.purple};
  font-weight: 400;
  padding: 5px 10px;
  font-size: ${(props) => props.size || '12px'};
`

const Badge = (props) => {
  const {
    color, background, size, label,
  } = props
  return (
    <Root color={color} background={background} size={size} className="badge">
      {label}
    </Root>
  )
}

export default Badge
