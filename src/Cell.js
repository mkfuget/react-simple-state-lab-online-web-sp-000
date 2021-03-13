import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }
  handleClick = () =>
  {
    this.setState({
      count: newCount
    })
  }
  render() {
    return (
      <div
        className="cell"
        onClick = {this.handleClick}
        style={{backgroundColor: this.state.color}}
      >

      </div>
    )
  }

}
