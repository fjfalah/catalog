import React from 'react'
import styled from 'styled-components'
import {
  Loading, ProductCard, Flex, Text,
} from '../../../components'
import theme from '../../../constants/theme'

const Root = styled.div`
  padding: 0 10px;
`

const ProductItems = ({ products }) => {
  if (products === null) {
    return <Loading />
  }

  if (products.length === 0) {
    return (
      <Flex jc="center">
        <Text color={theme.color.black60}><i>No Data Found</i></Text>
      </Flex>
    )
  }

  return (
    <Root>
      {
        products.map((product, index) => {
          const {
            id, slug, title, images, price, variants,
          } = product
          return (
            <ProductCard
              key={index}
              id={id}
              slug={slug}
              title={title}
              image={images[0].fullUrl}
              price={price.amount}
              variants={variants}
            />
          )
        })
      }
    </Root>
  )
}

export default ProductItems
