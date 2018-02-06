import React, { Component } from 'react'
import Reboot from 'material-ui/Reboot'
import Home from './Home'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Reboot />
        <Home />
      </div>
    )
  }
}

export default App
