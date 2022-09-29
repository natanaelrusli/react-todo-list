import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div className='todo'>
          <div style={{ display: 'flex', marginRight: 'auto' }}>
            <div className='pointer' onClick={() => this.props.onCheckClick(this.props.index)}>
              <span style={{ color: this.props.todo.done ? 'green' : 'red' }}>&#10004;</span>
            </div>
            <span className="anima" data-test={this.props.todo.done}>
              { this.props.todo.text }
            </span>
          </div>
          <div className='action'>
            <div className="pointer update-btn" onClick={() => this.props.onEditTodo(this.props.index)}>Edit</div>
            <div className="pointer delete-btn" onClick={() => this.props.onDelTodo(this.props.index)}>Delete</div>
          </div>
      </div>
    )
  }
}
