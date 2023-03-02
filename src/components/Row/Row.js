import cn from 'classnames'
import styled, { css } from 'styled-components'
import React, { Component } from 'react'

class Row extends Component {

  constructor() {
    super()

    this.element = styled.div`
      ${({ fullWidth }) => css`
        height: 100%;
        ${fullWidth ? `
          max-width: 100%;
        ` : ``}
      `}
    `
  }

  render() {
    const Row = this.element
    const { theme, blok, storyblokEditable } = this.props
    return (
      <Row {...storyblokEditable(blok)} key={blok._uid} theme={theme} className={cn(blok.style)} fullWidth={blok.style.includes('full-width')} >
        {this.props.children}
      </Row>
    )
  }
}

export default Row
