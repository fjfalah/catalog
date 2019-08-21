import React from 'react'
import { connect } from 'react-redux'
import Modal from '../components/Modal'

class Filter extends React.Component {
  componentDidMount = () => {
  }

  render() {
    const { show, handleOnClose, filterList } = this.props

    return (
      <Modal
        onClose={() => handleOnClose(false)}
        show={show && filterList !== null}
      >
        test
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  filterList: state.products.filterList,
})
export default connect(mapStateToProps)(Filter)
