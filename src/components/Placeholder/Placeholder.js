import React, { Component } from 'react'
import styled from 'styled-components'

class Placeholder extends Component {

  constructor() {
    super()

    this.element = styled.div`
    `
  }

  render() {
    const Placeholder = this.element
    const { componentName } = this.props
    return (
      <Placeholder>
        <p>
          The component <strong>{componentName}</strong> has not been created yet.
        </p>
      </Placeholder>
    )
  }
}

export default Placeholder
