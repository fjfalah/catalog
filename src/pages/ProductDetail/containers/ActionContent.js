import React from 'react'
import styled from 'styled-components'
import {
  Flex, Text, Button, Box,
} from '../../../components'
import theme from '../../../constants/theme'

const Root = styled.div`
  padding: 10px;
`

const ActionContent = ({ product }) => {
  const { favouriteCount, quantity } = product
  return (
    <Root>
      <Flex jc="space-between">
        <Text as="div" color={theme.color.black60} variant="caption">{favouriteCount} kali disimpan</Text>
        <Text as="div" color={theme.color.purple} variant="caption">stock tersedia {quantity}</Text>
      </Flex>
      <Box h="10" />
      <Flex>
        <Button variant="outline">
          Simpan
        </Button>
        <Button full>
          Beli Sekarang
        </Button>
      </Flex>
    </Root>
  )
}

export default ActionContent
