import React from 'react'
import styled from 'styled-components'
import { Text, Box } from '../../../components'
import { helpers } from '../../../libraries'
import theme from '../../../constants/theme'

const TitleWrapper = styled.div`
  padding: 10px;

  > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const SubContentWrapper = styled.div`
  padding: 10px;
`

const Content = ({ product }) => {
  const {
    title, price, material, variants,
  } = product

  return (
    <>
      <TitleWrapper>
        <Text variant="title-sm">{title}</Text>
        <Text variant="title-md" color={theme.color.purple}>{helpers.currencyFormat(price.amount, '.')}</Text>
      </TitleWrapper>
      <Box h="1" withSeparator />
      <SubContentWrapper>
        <Text variant="caption" color={theme.color.black60}>BAHAN UTAMA</Text>
        <Text variant="paragraph">{material}</Text>
        <Box h="5" />
        <Text variant="caption" color={theme.color.black60}>WARNA</Text>
        <Text variant="paragraph">{helpers.getVariantByKey({ variants, key: 'color' }).join(', ')}</Text>
        <Box h="5" />
        <Text variant="caption" color={theme.color.black60}>UKURAN</Text>
        <Text variant="paragraph">{helpers.getVariantByKey({ variants, key: 'size' }).join(', ')}</Text>
      </SubContentWrapper>
    </>
  )
}

export default Content
