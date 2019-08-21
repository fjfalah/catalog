import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Modal from '../components/Modal'
import {
  Text, Box, InputSelect, InputSelectColor, InputSelectSize, Flex, Button,
} from '../components'
import theme from '../constants/theme'
import { actionProductsGetAll } from '../store/actions/productsActions'
import { firebaseHelpers } from '../libraries'

const PanelWrapper = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid ${theme.color.grey10};
`
const Form = styled.form`
  overflow: auto;
  padding-bottom: 100px;
  height: 100%;
`

const Footer = styled(Flex)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  background: ${theme.color.white};
`

const PanelFilter = ({ title, children }) => {
  return (
    <PanelWrapper>
      <Text variant="paragraph" color={theme.color.black60}>{title}</Text>
      {children}
    </PanelWrapper>
  )
}

const initialState = {
  priceRanges: null,
  colors: null,
  sizes: null,
  selectPriceRanges: 'semua',
  selectColors: [],
  selectSizes: [],
}

class Filter extends React.Component {
  state = initialState

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

  handleSelectPrice = (e) => {
    this.setState({ selectPriceRanges: e.target.value })
  }

  handleSelectColor = (e) => {
    const isChecked = e.target.checked
    const { name } = e.target

    this.setState((prevState) => {
      const selectedColors = [...prevState.selectColors]
      if (!isChecked) {
        return {
          selectColors: selectedColors.filter((color) => color !== name),
        }
      }

      return {
        selectColors: [...selectedColors, name],
      }
    })
  }

  handleSelectSize = (e) => {
    const isChecked = e.target.checked
    const { name } = e.target

    this.setState((prevState) => {
      const selectedSizes = [...prevState.selectSizes]
      if (!isChecked) {
        return {
          selectSizes: selectedSizes.filter((size) => size !== name),
        }
      }

      return {
        selectSizes: [...selectedSizes, name],
      }
    })
  }

  handleSubmitFilter = (e) => {
    e.preventDefault()
    const { selectPriceRanges, selectColors, selectSizes } = this.state
    const setFilter = firebaseHelpers.setFilter(selectPriceRanges, selectColors, selectSizes)

    this.props.actionProductsGetAll(setFilter)
    this.props.handleOnClose(false)
    this.setState(initialState)
  }

  handleResetFilter = () => {
    this.props.actionProductsGetAll(null, this.props.setOrder)
    this.props.handleOnClose(false)
    this.setState(initialState)
  }

  render() {
    const { show, handleOnClose } = this.props
    const { priceRanges, colors, sizes } = this.state
    return (priceRanges !== null && colors !== null && sizes !== null) && (
      <Modal
        onClose={() => handleOnClose(false)}
        show={show}
      >
        <Text variant="title-md">Filter</Text>
        <Box h="10" withSeparator />
        <Form onSubmit={(e) => this.handleSubmitFilter(e)}>
          <PanelFilter title="Rentang Harga">
            <InputSelect name="filterPrice" onChange={(e) => this.handleSelectPrice(e)}>
              {
                priceRanges
                  .sort((a, b) => a.order - b.order)
                  .map((item, index) => {
                    return (
                      <option key={index} value={item.key}>{item.name}</option>
                    )
                  })
              }
            </InputSelect>
          </PanelFilter>
          <PanelFilter title="Pilih Warna">
            <InputSelectColor data={colors} onChange={(e) => this.handleSelectColor(e)} />
          </PanelFilter>
          <PanelFilter title="Pilih Ukuran Baju dan Celana">
            <InputSelectSize data={sizes} onChange={(e) => this.handleSelectSize(e)} />
          </PanelFilter>
          <Footer>
            <Button type="button" variant="outline" full onClick={() => this.handleResetFilter()}>Reset</Button>
            <Button type="submit" full>Filter</Button>
          </Footer>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  filterList: state.products.filterList,
  setOrder: state.products.setOrder,
})
export default connect(mapStateToProps, {
  actionProductsGetAll,
})(Filter)
