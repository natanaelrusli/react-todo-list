import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TextH1 extends Component {
  render() {
    return (
      <h1 style={{ color: this.props.color || 'red' }}>
        {this.props.children}
      </h1>
    );
  }
}

TextH1.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default TextH1;
