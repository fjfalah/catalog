import React from 'react'
import styled from 'styled-components'
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom'
import { GlobalStyles } from './components'
import history from './routes/history'
import { Products, ProductDetail } from './pages'

const Root = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  return (
    <>
      <Root>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products/:slug" exact component={ProductDetail} />
          </Switch>
        </Router>
      </Root>
      <GlobalStyles />
    </>
  )
}

export default App
