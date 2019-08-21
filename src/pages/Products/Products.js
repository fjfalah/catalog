import React from 'react'
import { connect } from 'react-redux'
import { Main } from '@/components'
import { actionProductsGetAll, actionProductsGetAllFilter } from '../../store/actions/productsActions'
import NavTop from './containers/NavTop'
import ProductItems from './containers/ProductItems'
import Sort from './containers/Sort'

class Products extends React.Component {
  componentDidMount = () => {
    // this.props.actionProductsGetAll()
    this.props.actionProductsGetAllFilter()
  }

  render() {
    const { products } = this.props

    return (
      <>
        <Main>
          <NavTop />
          <Sort />
          <ProductItems products={products} />
        </Main>
      </>
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
