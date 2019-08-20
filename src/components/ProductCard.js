import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../constants/theme'
import Flex from './Flex'
import Text from './Text'
import Button from './Button'
import Box from './Box'
import Badge from './Badge'
import { helpers } from '../libraries'

const Root = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
  background: ${theme.color.white};
  margin-bottom: 10px;
  overflow: hidden;
`

const Image = styled.div`
  height: 400px;
  background-color: red;
  background: url(${(props) => props.image}) center center / cover no-repeat;
`

const Content = styled.div`
  padding: 10px;
`

const TitleContent = styled(Flex)`
  width: 70%;
`

const Title = styled(Text)`
  white-space: nowrap;
  font-weight: 100;
  text-overflow: ellipsis;
  overflow: auto;
`

const ButtonDetail = styled(Link)`
  width: 100%;
`


const ProductCard = (props) => {
  const {
    slug, title, image, price, variants,
  } = props

  const sizeVariant = helpers.getVariantByKey({ variants, key: 'size', isReadyStock: true })

  return (
    <Root>
      <Image image={image} />
      <Content>
        <Flex jc="space-between" ai="center">
          <TitleContent fd="column">
            <Title variant="title-sm">{title}</Title>
            <Text variant="title-md" as="div">{helpers.currencyFormat(price, '.')}</Text>
          </TitleContent>
          {
            sizeVariant.length > 0 && (
              <Badge
                color="#808080"
                background="#e8e8e8"
                label={sizeVariant.join(', ')}
              />
            )}
        </Flex>
        <Box h="5" />
        <Flex>
          <ButtonDetail to={`/products/${slug}`}>
            <Button type="button" full variant="outline">Detail</Button>
          </ButtonDetail>
          <Button full>Beli</Button>
        </Flex>
      </Content>
    </Root>
  )
}

export default ProductCard
