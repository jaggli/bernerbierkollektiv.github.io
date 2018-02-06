import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Reboot from 'material-ui/Reboot'
import Home from './Home'
import { background } from './img'

injectGlobal`
  html, body { height: 100%; }
  body{
    box-sizing: border-box;
    position:relative;
    padding:160px 20px;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    background-attachment: scroll;
    background-image: url(${background});
    background-color: black !important;
    @media (max-width: 500px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
  #root{
    max-width: 1000px;
    min-width: 320px;
    margin: 0 auto;
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
