import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.color
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

}
