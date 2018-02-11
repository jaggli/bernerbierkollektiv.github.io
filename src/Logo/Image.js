import React from 'react'
import styled, { css } from 'styled-components'

const width = '300'
const height = '240'
const viewBox = '0 0 300 240'

const getDimensions = () => ({
  height,
  width
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({noStyles}) => !noStyles ? getDimensionsCss() : null}
  text-shadow: none;
  margin-bottom: -20px;
`

const matrix = [
  0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 0.0, 0.0,
  0.0, 0.0, 0.0, 1.0, 0.0
].join(' ')

const defaultProps = {
  children: [
    <defs
      key='key-0'
    >
      <filter
        id='f4'
        x='0'
        y='0'
        width='200%'
        height='200%'
      >
        <feOffset
          result='offOut'
          in='SourceGraphic'
          dx='20'
          dy='20'
        />
        <feColorMatrix
          result='matrixOut'
          in='offOut'
          type='matrix'
          values={matrix}
        />
        <feGaussianBlur
          result='blurOut'
          in='matrixOut'
          stdDeviation='10'
        />
        <feBlend
          in='SourceGraphic'
          in2='blurOut'
          mode='normal'
        />
      </filter>
      <text
        id='s-82d33a0296-a'
        x='150'
        y='160'
        fontFamily='Obake'
        letterSpacing='3'
        textAnchor='middle'
      >
        <tspan fontSize='215px'>B</tspan>
        <tspan fontSize='320px'>B</tspan>
        <tspan fontSize='215px'>K</tspan>
      </text>
      <mask
        id='s-82d33a0296-c'
      >
        <rect
          width='100%'
          height='100%'
          fill='#fff'
        />
        <use
          x='-5'
          y='-5'
          stroke='#000'
          strokeWidth='8'
          xlinkHref='#s-82d33a0296-a'
        />
      </mask>
    </defs>,
    <use
      fill='#fff'
      xlinkHref='#s-82d33a0296-a'
      key='key-2'
      filter='url(#f4)'
    />,
    <use
      x='6'
      y='6'
      fill='#fff'
      mask='url(#s-82d33a0296-c)'
      xlinkHref='#s-82d33a0296-a'
      key='key-1'
    />,
    <use
      fill='#fff'
      xlinkHref='#s-82d33a0296-a'
      key='key-2'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Image'
})
