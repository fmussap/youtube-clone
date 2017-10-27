'use strict'

import React, { PureComponent } from 'react'

class App extends PureComponent {
  render () {
    return (
      <div>
        <this.state.Component>{this.state.title}</this.state.Component>
      </div>
    )
  }
}

export default App
