import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { actionProductsGetAll, actionProductsGetAllFilter } from './store/actions/productsActions'

const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component {
  componentDidMount = () => {
    this.props.actionProductsGetAll()
    this.props.actionProductsGetAllFilter()
  }

  render() {
    return (
      <Root>
        Root
      </Root>

    )
  }
}

export default connect(null, {
  actionProductsGetAll,
  actionProductsGetAllFilter,
})(App)
