import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Modal from '../components/Modal'
import { Text, Box } from '../components'
import theme from '../constants/theme'

const PanelWrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid ${theme.color.grey10};
`

const PanelFilter = ({ title, children }) => {
  return (
    <PanelWrapper>
      <Text variant="paragraph" color={theme.color.black60}>{title}</Text>
      {children}
    </PanelWrapper>
  )
}

class Filter extends React.Component {
  state = {
    priceRanges: null,
    colors: null,
    sizes: null,
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.filterList !== null) {
      this.setFilterByCategory()
    }
  }

  splitFilterList = (data, category) => {
    return data.filter((item) => item.category === category)
  }

  setFilterByCategory = () => {
    const { filterList } = this.props
    if (filterList !== null) {
      this.setState({
        priceRanges: this.splitFilterList(filterList, 'priceRanges'),
        colors: this.splitFilterList(filterList, 'colors'),
        sizes: this.splitFilterList(filterList, 'clothesAndPantsSizes'),
      })
    }
  }

  render() {
    const { show, handleOnClose, filterList } = this.props
    const { priceRanges, colors, sizes } = this.state

    return (
      <Modal
        onClose={() => handleOnClose(false)}
        show={show && filterList !== null}
      >
        <Text variant="title-md">Filter</Text>
        <Box h="10" withSeparator />
        <form>
          <PanelFilter title="Rentang Harga">
          test
          </PanelFilter>
          <PanelFilter title="Pilih Warna">
          test
          </PanelFilter>
          <PanelFilter title="Pilih Ukuran Baju dan Celana">
          test
          </PanelFilter>
        </form>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  filterList: state.products.filterList,
})
export default connect(mapStateToProps)(Filter)
