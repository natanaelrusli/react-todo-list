import React, { Component, createRef } from 'react'

export default class InputTodo extends Component {
  constructor(props) {
      super(props)
      this.state = {
        input: this.props.defaultValue || ''
      }
  }

  inputRef = createRef(null)

  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleInputKeyUp = (e) => {
    if (e.key === 'Enter' && this.state.input) {
      this.props.onSubmit(this.state.input)
      this.setState({input: ''})
    }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyUp}
          ref={this.inputRef}
          className='input-todo'
          placeholder={this.props.placeholder}
        />
      </>
    )
  }
}
