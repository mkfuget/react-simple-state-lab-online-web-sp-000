import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      colorTest: props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }
  handleClick = () =>{
    this.setState({
      colorTest: '#333'
    })
  }
  render() {
    return (
      <div
        className="cell"
        onClick = {this.handleClick}
        style={{backgroundColor: this.state.colorTest}}
      >

      </div>
    )
  }

}
