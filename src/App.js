import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Reboot from 'material-ui/Reboot'
import Home from './Home'
import { background } from './img'

injectGlobal`
  html, body { height: 100%; }
  body{
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: middle middle;
    background-image: url(${background});
  }
  #root{
    max-width: 1000px;
    min-width: 320px;
    margin: 160px auto;
    @media (max-width: 500px) {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`

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
