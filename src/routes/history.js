const createHistory = require('history').createBrowserHistory

const history = createHistory()
history.listen(() => {
  window.scrollTo(0, 0)
  window.onpopstate = null
})

export default history
