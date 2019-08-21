import React, { useState } from 'react'
import styled from 'styled-components'
import {
  Card, Text, Box, Flex,
} from '../../../components'
import { marked } from '@/libraries'
import theme from '../../../constants/theme'

const TitleWrapper = styled(Flex)`
  padding: 10px;
`

const ArrowToggle = styled.img`
  height: 15px;
`

const SubContentWrapper = styled.div`
  padding: 10px;
`

const Description = ({ product }) => {
  const [isDescShow, setIsDescShow] = useState(false)
  const { descriptionMarkdown, detailMarkdown, tryOutfit } = product

  return (
    <Card>
      <TitleWrapper jc="space-between" ai="center" onClick={() => setIsDescShow(!isDescShow)}>
        <Text variant="title-sm">Detail & Ukuran</Text>
        {
          isDescShow
            ? <ArrowToggle src={require('@/assets/icons/up-arrow-angle.svg')} alt="" />
            : <ArrowToggle src={require('@/assets/icons/down-arrow.svg')} alt="" />
        }
      </TitleWrapper>
      {
        isDescShow && (
          <>
            <Box h="1" withSeparator />
            <SubContentWrapper>
              <Text variant="caption" color={theme.color.black60}>DETAIL</Text>
              <Text dangerouslySetInnerHTML={{ __html: marked.parse(detailMarkdown) }} />
            </SubContentWrapper>
            <Box h="1" withSeparator />
            <SubContentWrapper>
              <Text variant="caption" color={theme.color.black60}>PANDUAN UKURAN</Text>
              <Text dangerouslySetInnerHTML={{ __html: marked.parse(descriptionMarkdown) }} />
            </SubContentWrapper>
            <Box h="1" withSeparator />
            <SubContentWrapper>
              <Text variant="caption" color={theme.color.black60}>PRODUK BISA DICOBA DAN DIKEMBALIKAN</Text>
              <Text variant="paragraph">{ tryOutfit ? 'YA' : 'TIDAK' }</Text>
            </SubContentWrapper>
          </>
        )
      }
    </Card>
  )
}

export default Description
