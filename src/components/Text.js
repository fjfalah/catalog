import styled, { css } from 'styled-components'
import theme from '../constants/theme'

const setVariant = (props) => {
  switch (props.variant) {
  case 'title-lg':
    return css`
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.4px;
          line-height: 36px;
        `
  case 'title-md':
    return css`
          font-size: 20px;
          font-weight: 400;
          line-height: 32px;
        `
  case 'title-sm':
    return css`
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        `
  case 'title-xs':
    return css`
          font-size: 10px;
          font-weight: normal;
          line-height: 18px;
        `
  case 'paragraph-bold':
    return css`
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
        `
  case 'paragraph':
    return css`
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        `
  case 'caption':
    return css`
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
        `
  case 'caption-bold':
    return css`
            font-size: 12px;
            font-weight: 700;
            line-height: 20px;
          `
  case 'overline':
    return css`
          font-size: 12px;
          font-weight: 700;
          line-height: 20px;
        `
  default:
    return css`
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        `
  }
}

const Text = styled.p`
  letter-spacing: 0.2px;
  font-weight: normal;
  margin: 0;
  color: ${(props) => props.color || theme.color.black};

  ${setVariant}
`

export default Text
