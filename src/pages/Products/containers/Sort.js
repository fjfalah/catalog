import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  Button, Text, Flex, Card,
} from '../../../components'
import theme from '../../../constants/theme'
import { helpers, firebaseHelpers } from '../../../libraries'
import { actionProductsGetAll } from '../../../store/actions/productsActions'

const Root = styled.div`
  position: relative;
  padding: 10px;
  > div {
    padding: 10px;
  }
`

const SortWrapper = styled(Flex)`
  button {
    margin: 0 !important;
  }
`

const SortListWrapper = styled.div`
  border-radius: 8px;
  width: calc(100% - 20px);
  background: ${theme.color.white};
  position: absolute;
  z-index: 1;
`

const ButtonList = styled.div`
  cursor: pointer;
  padding: 5px;
`

const SortList = ({ data, handleChangeSort }) => {
  return (
    <SortListWrapper className="fade-in">
      <Flex fd="column" ai="center">
        {
          data.map((item, index) => {
            return (
              <ButtonList key={index} onClick={() => handleChangeSort(item, false)}>
                <Text>{helpers.toSentenceCase(item)}</Text>
              </ButtonList>
            )
          })
        }
      </Flex>
    </SortListWrapper>
  )
}

const Sort = (props) => {
  const sortData = ['terbaru', 'terpopuler', 'termurah', 'termahal']
  const [activeSort, setActiveSort] = useState('terbaru')
  const [showSortList, setShowSortList] = useState(false)

  const handleActiveSort = (sort, isShowList) => {
    setActiveSort(sort)
    setShowSortList(isShowList)
    props.actionProductsGetAll(
      null,
      firebaseHelpers.setOrder(sort)
    )
  }

  return (
    <Root>
      <Card>
        <SortWrapper fd="column" ai="center">
          <Text>Urutkan</Text>
          <Button
            type="button"
            full
            variant="outline"
            onClick={() => setShowSortList(!showSortList)}
          >{helpers.toSentenceCase(activeSort)}
          </Button>
        </SortWrapper>
      </Card>
      {
        showSortList && <SortList data={sortData} handleChangeSort={handleActiveSort} />
      }
    </Root>
  )
}

const mapStateToProps = (state) => ({
  setFilter: state.products.setFilter,
})

export default connect(mapStateToProps, {
  actionProductsGetAll,
})(Sort)
