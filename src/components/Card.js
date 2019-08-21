import styled from 'styled-components'
import theme from '../constants/theme'

const Card = styled.div`
  border-radius: 8px;
  width: 100%;
  background: ${theme.color.white};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  margin-bottom: 10px;
  overflow: hidden;
`

export default Card
