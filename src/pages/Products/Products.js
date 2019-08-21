import React from 'react'
import { connect } from 'react-redux'
import { Main, Box } from '@/components'
import { actionProductsGetAll, actionProductsGetAllFilter } from '../../store/actions/productsActions'
import NavTop from './containers/NavTop'
import ProductItems from './containers/ProductItems'


class Products extends React.Component {
  componentDidMount = () => {
    this.props.actionProductsGetAll()
    this.props.actionProductsGetAllFilter()
  }

  render() {
    const { products } = this.props
    return (
      <Main>
        <NavTop />
        <Box h="10" />
        <ProductItems products={products} />
      </Main>

    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products.list,
})

export default connect(mapStateToProps, {
  actionProductsGetAll,
  actionProductsGetAllFilter,
})(Products)
