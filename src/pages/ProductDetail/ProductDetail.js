import React from 'react'
import { connect } from 'react-redux'
import { from } from 'rxjs'
import styled from 'styled-components'
import { productsServices } from '../../services'
import {
  Loading, Main, Box, Card,
} from '../../components'
import NavTop from './containers/NavTop'
import ImageSlider from './containers/ImageSlider'
import Content from './containers/Content'
import ActionContent from './containers/ActionContent'
import Description from './containers/Description'

const Root = styled(Main)`
  padding-left: 10px;
  padding-right: 10px;
`

class ProductDetail extends React.Component {
  state = {
    product: null,
  }

  componentDidMount = () => {
    const { slug } = this.props.match.params
    this.getDetailProduct(slug)
  }

  getDetailProduct = (slug) => {
    const filters = [{ key: 'slug', operator: '==', value: slug }]
    return from(productsServices.getAllProducts(filters)).subscribe(
      (data) => this.setState({ product: data[0] }),
      (err) => console.log(err)
    )
  }

  render() {
    const { product } = this.state
    if (product === null) {
      return (
        <Main>
          <NavTop product={product} />
          <Loading />
        </Main>
      )
    }

    const { images } = product

    return (
      <Root>
        <NavTop product={product} />
        <Box h="10" />
        <Card>
          <ImageSlider images={images} />
          <Box h="1" withSeparator />
          <Content product={product} />
          <Box h="1" withSeparator />
          <ActionContent product={product} />
        </Card>
        <Description product={product} />
      </Root>
    )
  }
}

export default connect(null, {

})(ProductDetail)
