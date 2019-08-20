import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px;
`


const ProductCard = (props) => {
  const {
    id, slug, name, image, price, size,
  } = props

  return (
    <Root>
      ciattt
    </Root>
  )
}

export default ProductCard
