import React from 'react'
import { Form } from 'semantic-ui-react'

class Togglable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <Form.Button onClick={this.toggleVisibility}>{this.props.buttonLabel}</Form.Button>
        </div>
        <div style={showWhenVisible}>
          {this.props.children}
          <Form.Button onClick={this.toggleVisibility}>cancel</Form.Button>
        </div>
      </div>
    )
  }
}

export default Togglable