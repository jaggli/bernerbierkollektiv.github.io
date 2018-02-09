import React, { PureComponent } from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  font-family: 'Obake FREE VER.';
  font-weight: normal;
  font-style: normal;
  font-size: 92px;
  text-align: center;
  padding: 16px 32px 44px 44px;
  color: rgba(255,255,255,.9);
  text-shadow:
    0 0 5px black,
    0 0 15px black,
    0 0 25px black,
    0 0 35px black,
    0 0 45px black;
`

const LogoTop = styled.div`
  > .one {
    font-size: 214px;
  }
  > .two {
    font-size: 284px;
  }
`

class Logo extends PureComponent {
  render () {
    return (
      <LogoContainer>
        <LogoTop>
          <span class='one'>B</span>
          <span class='two'>B</span>
          <span class='one'>K</span>
        </LogoTop>
        <div>
          Berner Bierkollektiv
        </div>
      </LogoContainer>
    )
  }
}

export default Logo
