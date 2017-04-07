import polyfill from 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

// This is optional if your application is idempotent.
// livereactload will rerun this whole file if this hook is not there.
if (module.hot) {
  module.hot.onUpdate(() => { render(Root) })
}
