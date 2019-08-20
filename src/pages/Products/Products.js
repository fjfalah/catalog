import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Flex, Main, Navbar } from '@/components'
import { actionProductsGetAll, actionProductsGetAllFilter } from '../../store/actions/productsActions'

const NavWrapper = styled(Flex)`
  height: 100%;

  > img {
    height: 37.75px;
  }
`

const FilterWrapper = styled.div`
  img {
    height: 20px;
    margin-left: 15px;
  }
`

class Products extends React.Component {
  componentDidMount = () => {
    this.props.actionProductsGetAll()
    this.props.actionProductsGetAllFilter()
  }

  render() {
    return (
      <Main>
        <Navbar>
          <NavWrapper ai="center" jc="space-between">
            <img src={require('@/assets/images/logo-sorabel.png')} alt="SORABEL" />
            <FilterWrapper>
              <img src={require('@/assets/icons/search-interface-symbol.svg')} alt="" />
              <img src={require('@/assets/icons/equalization.svg')} alt="" />
            </FilterWrapper>
          </NavWrapper>
        </Navbar>
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
