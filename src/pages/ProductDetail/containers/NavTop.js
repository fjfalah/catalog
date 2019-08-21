import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar, Flex, Text } from '../../../components'
import theme from '../../../constants/theme'


const NavWrapper = styled(Flex)`
  height: 100%;

  > div:first-child {
    width: 70%
  }
  > div:last-child-child {
    width: 30%
  }
`

const ButtonBack = styled(Link)`
  margin-right: 10px;
  img {
    height: 20px;
  }
`

const Title = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ImageFav = styled.img`
  height: 20px;

  &:first-child {
    margin-right: 10px;
  }
`

const NavTop = ({ product }) => {
  return (
    <Navbar>
      <NavWrapper ai="center" jc="space-between">
        <Flex>
          <ButtonBack to="/">
            <img src={require('@/assets/icons/left-arrow-line-symbol.svg')} alt="" />
          </ButtonBack>
          {
            product !== null && <Title variant="title-sm" color={theme.color.black60}>{product.title}</Title>
          }
        </Flex>
        <Flex>
          <ImageFav src={require('@/assets/icons/like-heart-outline-symbol.svg')} alt="" />
          <ImageFav src={require('@/assets/icons/shopping-cart-outline.svg')} alt="" />
        </Flex>
      </NavWrapper>
    </Navbar>
  )
}

export default NavTop
