import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.setState = (){
      color: props.value
    }) // ...define initial state with a key of 'color' set to the 'value' prop
  }
  handleClick = () =>
  {
    this.state = {
      color: '#333'
    }
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
