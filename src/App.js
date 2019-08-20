import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component {
  componentDidMount = () => {
  }

  render() {
    return (
      <Root>
        Root
      </Root>

    )
  }
}

export default App
